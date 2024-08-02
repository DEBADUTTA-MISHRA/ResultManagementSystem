const express = require('express');
const router = express.Router();
const studentRouter = require('./studentRouter');
const authRouter = require('./authRouter');


router.use('/student',studentRouter);
router.use('/auth',authRouter);


module.exports = router;