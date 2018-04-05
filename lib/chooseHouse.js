const northcodersProfiles = require('./personalities');

module.exports = function (watsonData) {
    
    const twitterPersonality = {}

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 6; j++) {
           twitterPersonality[watsonData.personality[i].children[j].name] = watsonData.personality[i].children[j].percentile
        }
    }

    const distanceRating = {
        1: 0,
        2: 0
    }

    for (i = 1; i < 3; i ++) {
        Object.values(twitterPersonality).forEach((ele, index) => {
            distanceRating[i] += (ele - Object.values(northcodersProfiles[i])[index]) ** 2;
        });
    }

    return distanceRating;

}