const pi = require('../lib/personalityInsights');

function getPersonality(req, res, next) {
    const { content } = req.body;
    pi.profile({
        content,
        content_type: 'text/plain'
    }, (err, watsonData) => {
        if (err) next(err);
        else res.send(watsonData);
    })
}

module.exports = getPersonality;