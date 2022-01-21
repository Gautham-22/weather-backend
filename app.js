const request = require('request');
require("dotenv").config();

// weatherstack
const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=new%20york`;

request({ url: weatherURL, json: true }, function (err, res) { 
    if(err) {
        console.log('error:', error);
    }
    const current = data.current;
    console.log(`It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out.`); 
});

// geocoding
const geocodingURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.ACCESS_TOKEN}`;

request({ url: geocodingURL, json: true }, function(err, res) {
    if(err) {
        console.log('error:', err);
    }
    const data = res.body;
    data.features.map((elem) => console.log(elem.place_name, elem.center));
})