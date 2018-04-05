const router = require('express').Router();
const personalityRouter = require('./personality');

router.use('/personality', personalityRouter)

module.exports = router;