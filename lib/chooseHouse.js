const { northcodersProfiles, tutorNames } = require('./personalities');

module.exports = function (watsonData) {

    const twitterPersonality = {}

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 6; j++) {
            twitterPersonality[watsonData.personality[i].children[j].name] = watsonData.personality[i].children[j].percentile
        }
    }

    const distanceRating = {};
    Object.keys(northcodersProfiles).forEach(profile => {
        distanceRating[profile] = 0;
    });

    for (i = 1; i <= Object.values(distanceRating).length; i++) {
        Object.values(twitterPersonality).forEach((ele, index) => {
            distanceRating[i] += (ele - Object.values(northcodersProfiles[i])[index]) ** 2;
        });
    }

    // return distanceRating;

    let tutorKey;
    let tutorDistance = 30;

    for (key in distanceRating) {
        if (distanceRating[key] < tutorDistance) {
            tutorKey = key;
            tutorDistance = distanceRating[key];
        }
    }

    // return tutorKey;
    return tutorNames[tutorKey - 1];

}