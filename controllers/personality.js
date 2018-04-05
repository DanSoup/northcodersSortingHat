const pi = require('../lib/personalityInsights');
const chooseHouse = require('../lib/chooseHouse')

function getPersonality(req, res, next) {
    const { content } = req.body;
    pi.profile({
        content,
        content_type: 'text/plain'
    }, (err, watsonData) => {
        if (err) next(err);
        else res.send(chooseHouse(watsonData));
    })
}

module.exports = getPersonality;