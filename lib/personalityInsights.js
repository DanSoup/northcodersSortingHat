if (process.env.username === undefined) {
    const { username, password } = require('../config/watsonCredentials');
} else {
    const { username, password } = process.env;
}

console.log('this is a username ' + username);
console.log('this is alse username ' + process.env.username);

const PersonalityInsights = require('watson-developer-cloud/personality-insights/v3');

module.exports = new PersonalityInsights({
    username,
    password,
    version_date: '2017-12-12'
});