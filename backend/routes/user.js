const express = require('express');
const router = express.Router();
const zod = require('zod');
const User = require('../db/db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const authMiddleware = require('../auth/middleware');
const { json } = require('body-parser');

// user input validation schema
const userSignupSchema = zod.object({
    username: zod.string().email().min(3).max(30),
    password: zod.string().min(6),
    firstname: zod.string().min(3).max(50),
    lastname: zod.string().min(3).max(50),
});

const userSigninSchema = zod.object({
    username: zod.string().email().min(3).max(30),
    password: zod.string().min(6)
});

const userUpdateSchema = zod.object({
    password: zod.string().min(6).optional(),
    firstname: zod.string().min(3).max(50).optional(),
    lastname: zod.string().min(3).max(50).optional(),
});


// user signup route
router.post('/signup', (req, res) => {
    try {
        const { username, password, firstname, lastname } = userSignupSchema.parse(req.body);

        // check if the user already exists
        User.findOne({ username }).then(async (user) => {
            if (user) {
                return res.status(411).json({ message: 'Email already taken' });
            } else {
                const newUser = new User({ username, password, firstname, lastname });
                const hashPassword = await newUser.hashPassword(password);
                newUser.password = hashPassword;
                newUser.save()
                    .then(async () => {
                        const token = await jwt.sign({ userId: newUser._id }, JWT_SECRET);
                        res.status(200).json({
                            message: 'User created successfully',
                            token: token
                        })
                    })
                    .catch((error) => res.status(411).json({ message: error.errors }));
            }

        })

    } catch (error) {
        res.status(411).json({ message: "Incorrect inputs" });
    }
});


// user signin route
router.post('/signin', async (req, res) => {
    const { success } = userSigninSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({ message: 'Incorrect inputs' });
    }
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
        return res.status(411).json({ message: 'User not found' });
    }

    if (!await user.validatePassword(password)) {
        return res.status(411).json({ message: 'Invalid password' });
    }

    const token = await jwt.sign({ userId: user._id }, JWT_SECRET);

    res.status(200).json({
        token
    });

});


// user update route

router.put('/', authMiddleware, async (req, res) => {
    const { success } = userUpdateSchema.safeParse(req.body);
    if (!success) {
        return res.status(411).json({ message: 'Incorrect inputs' });
    }

    const { password, firstname, lastname } = req.body;
    const user = await User.findById(req.userId);

    if (!user) {
        return res.status(411).json({ message: 'User not found' });
    }

    if (password) {
        const hashPassword = await user.hashPassword(password);
        user.password = hashPassword;
    }
    if (firstname) {
        user.firstname = firstname;
    }
    if (lastname) {
        user.lastname = lastname;
    }

    await user.save();
    res.status(200).json({ message: 'User updated successfully' });
});


// get all users with firstname and lastname as filter

router.get('/bulk', authMiddleware, async (req, res) => {
    let filter = req.query.filter || '';
    const users = await User.find({ $or: [{ firstname: { $regex: filter, $options: 'i' } }, { lastname: { $regex: filter, $options: 'i' } }] });

    let data = users.map(user => {
        return {
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }
    });
    data = { "users": data };

    res.status(200).json(data);
});



module.exports = router;