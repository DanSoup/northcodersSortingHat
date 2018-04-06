const router = require('express').Router();
const scrapeTweets = require('../controllers/twitter')

router.get('/', scrapeTweets);

module.exports = router;