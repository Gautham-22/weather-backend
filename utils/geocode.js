const request = require('request');

const geocode = (address, callback) => {
    const geocodingURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.ACCESS_TOKEN}`;
    
    request({ url: geocodingURL, json: true }, (error, res) => {
        if(error) {
            callback("Unable to connect to weather service.", undefined);
        } else if(res.body.features.length == 0) {
            callback("Unable to find location. Try another search", undefined);
        } else {
            callback(undefined, {
                latitude: res.body.features[0].center[0],
                longitude: res.body.features[0].center[1],
                placeName: res.body.features[0].place_name
            })
        }
    })
};

module.exports = geocode;