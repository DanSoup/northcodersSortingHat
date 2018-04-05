const router = require('express').Router();
const personalityRouter = require('./personality');
const twitterRouter = require('./twitter');

router.use('/personality', personalityRouter)

router.use('/twitter', twitterRouter)

module.exports = router;