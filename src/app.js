// configuring environment variables
require("dotenv").config();

const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

// serving static assets
app.use(express.static(path.join(__dirname, "../public")));

// templating and registering partials
app.set("view engine","hbs");
hbs.registerPartials(path.join(__dirname, "../views/partials"));

app.get("", (req,res) => {
    res.render("index", {
        title: "Weather",
        content: "Made by Gautham"
    });
})

app.get("/about", (req,res) => {
    res.render("about", {
        title: "About page",
        content: "This is a weather application"
    });
})

app.get("/help", (req,res) => {
    res.render("help", {
        title: "Help page",
        content: "This is some helpful text"
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server up running on PORT " + PORT);
})

// const geocode = require("./utils/geocode");
// const forecast = require("./utils/forecast");

// geocode("new york", (error, data) => {
//     if(error) {
//         return console.log(error);
//     }
//     forecast(data.latitude, data.longitude, (error, currentWeather) => {
//         if(error) {
//             return console.log(error);
//         }
//         console.log(data.location);
//         console.log(`It is currently ${currentWeather.temperature} degrees out. It feels like ${currentWeather.feelslike} degrees out.`); 
//     })
// })