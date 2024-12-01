const express = require('express');
const router = express.Router();
const zod = require('zod');
const User = require('../db/db');


const userSignupSchema = zod.object({
    username: zod.string().email().min(3).max(30),
    password: zod.string().min(6),
    firstname: zod.string().min(3).max(50),
    lastname: zod.string().min(3).max(50),
});

const userSigninSchema = zod.object({
    username: zod.string().min(3).max(30).email(),
    password: zod.string().min(6),
});



router.post('/signup', (req, res) => {
    try {
        userSignupSchema.safeParse(req.body);
        const { username, password, firstname, lastname } = req.body;

        const user = new User({ username, password, firstname, lastname });
        user.hashPassword();
        user.save();
        return res.status(201).json({ message: 'User created successfully' });
    }
    catch (error) {
        return res.status(400).json({ error: error.errors, body: req.body });
        console.log(error.errors);
    }
});

module.exports = router;