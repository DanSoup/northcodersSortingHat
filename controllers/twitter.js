const Twit = require('twit');
let consumer_key = process.env.consumer_key;
let consumer_secret = process.env.consumer_secret
let access_token = process.env.access_token
let access_token_secret = process.env.access_token_secret;
let keysTokens = {};
if (consumer_key === undefined) {
  keysTokens = require('../config/twitterCredentials.js');
} else {
  keysTokens = {consumer_key, consumer_secret, access_token, access_token_secret}
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

