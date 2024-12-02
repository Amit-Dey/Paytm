const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const accoutRouter = require('./account');

router.use('/user', userRouter);
router.use('/account', accoutRouter);


module.exports = router;