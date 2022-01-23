require("dotenv").config();

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("new york", (error, data) => {
    console.log(error);
    console.log(data);
    forecast(data.latitude, data.longitude, (error, currentWeather) => {
        console.log(error);
        console.log(`It is currently ${currentWeather.temperature} degrees out. It feels like ${currentWeather.feelslike} degrees out.`); 
    })
})