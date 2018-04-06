const router = require('express').Router();
const northcoderSorterCon = require('../controllers/northcoderSorter')

router.get('/', northcoderSorterCon)

module.exports = router;