const router = require('express').Router();
const getPersonality = require('../controllers/personality')

router.post('/', getPersonality);

module.exports = router;