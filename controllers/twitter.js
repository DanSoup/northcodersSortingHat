const Twit = require('twit');
const keysTokens = require('../config/twitterCredentials.js');
const getPersonality = require('./personality');

const scrapeTweets = (req, res, next) => {
  const T = new Twit(keysTokens);
  const { handle } = req.params;

  T.get('statuses/user_timeline', {
    screen_name: handle,
    count: 50,
    trim_user: true,
    include_rts: false,
    exclude_replies: false
  },
    (err, data, response) => {
      const allTweets = data.reduce((acc, curr) => {
        acc = acc + '. ' + curr.text;
        return acc;
      }, '');
      req.body = { content: allTweets };
      getPersonality(req, res, next);
    })

}


module.exports = scrapeTweets;

