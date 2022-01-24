require("dotenv").config();

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("new york", (error, data) => {
    if(error) {
        return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, currentWeather) => {
        if(error) {
            return console.log(error);
        }
        console.log(data.location);
        console.log(`It is currently ${currentWeather.temperature} degrees out. It feels like ${currentWeather.feelslike} degrees out.`); 
    })
})