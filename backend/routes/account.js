const express = require('express');
const router = express.Router();
const zod = require('zod');
const { User, Accounts } = require('../db/db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const authMiddleware = require('../auth/middleware');
const { json } = require('body-parser');


// Transfer schema
const transferSchema = zod.object({
    to: zod.string(),
    amount: zod.number().positive()
});



// account router
router.get('/', async (req, res) => {
    res.send('Account router');
});

// Get the balance of the user
router.get('/balance', authMiddleware, async (req, res) => {
    const account = await Accounts.findOne({
        userId: req.userId
    });
    if (!account) {
        return res.status(404).json({ message: 'Account not found' });
    }
    res.status(200).json({ balance: account.balance });
});


// Transfer money to another account

router.post('/transfer', authMiddleware, async (req, res) => {

    const { success, data } = transferSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json({ error: 'Invalid data' });
    }

    const { to, amount } = data;

    const account = await Accounts.findOne({
        userId: req.userId
    });

    if (!account) {
        return res.status(400).json({ message: 'Account not found' });
    }

    if (account.balance < amount) {
        return res.status(400).json({ message: 'Insufficient balance' });
    }

    const toAccount = await Accounts.findOne({
        userId: to
    });

    if (!toAccount) {
        return res.status(400).json({ message: 'Invalid Account' });
    }

    const session = await Accounts.startSession();

    session.startTransaction();

    try {
        await Accounts.updateOne({
            userId: req.userId
        }, {
            $inc: {
                balance: -amount
            }
        });

        await Accounts.updateOne({
            userId: to
        }, {
            $inc: {
                balance: amount
            }
        });

        await session.commitTransaction();

        session.endSession();

        res.status(200).json({ message: 'Transfer successful' });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        res.status(500).json({ message: 'Internal server error' });
    }

});


module.exports = router;
