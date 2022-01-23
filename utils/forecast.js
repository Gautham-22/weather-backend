const request = require('request');

const forecast = (lat, long, callback) => {
    const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=${long},${lat}`;

    request({ url: weatherURL, json: true }, function (err, res) { 
        if(err) {
            callback("Unable to connect to weather service.", undefined);
        } else if(res.body.error) {
            callback("Unable to find location.", undefined);
        } else {
            callback(undefined, res.body.current)
            const current = res.body.current;
        }
    });
};

module.exports = forecast;