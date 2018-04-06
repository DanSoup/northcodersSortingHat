const Twit = require('twit');
const {consumer_key, consumer_secret, access_token, access_token_secret} = process.env;
if (consumer_key === undefined) {
  const keysTokens = require('../config/twitterCredentials.js');
} else {
  const keysTokens = {consumer_key, consumer_secret, access_token, access_token_secret}
}
const getPersonality = require('./personality');

const scrapeTweets = (req, res, next) => {
  const T = new Twit(keysTokens);
  console.log(req.query);
  const { handle } = req.query;

  T.get('statuses/user_timeline', {
    screen_name: handle,
    count: 200,
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

