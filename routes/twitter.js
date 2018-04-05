const router = require('express').Router();
const scrapeTweets = require('../controllers/twitter')

router.get('/:handle', scrapeTweets);

module.exports = router;