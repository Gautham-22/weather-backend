// configuring environment variables
require("dotenv").config();

const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

// serving static assets
app.use(express.static(path.join(__dirname, "../public")));

// templating and registering partials
app.set("view engine","hbs");
hbs.registerPartials(path.join(__dirname, "../views/partials"));

// routes
app.get("", (req,res) => {
    res.render("index", {
        title: "Weather",
        name: "Gautham"
    });
})

app.get("/about", (req,res) => {
    res.render("about", {
        title: "About",
        name: "Gautham"
    });
})

app.get("/help", (req,res) => {
    res.render("help", {
        title: "Help",
        content: "This is some helpful text",
        name: "Gautham"
    });
})

// json endpoint
app.get("/weather", (req,res) => {
    if(req.query && !req.query.address) {
        return res.send({
            error: "Cannot find weather without address"
        })
    }

    geocode(req.query.address, (error, data) => {
        if(error) {
            return res.send({
                error
            });
        }
        forecast(data.latitude, data.longitude, (error, currentWeather) => {
            if(error) {
                return res.send({
                    error
                });
            }
            res.send({
                forecast: `It is currently ${currentWeather.temperature} degrees out. It feels like ${currentWeather.feelslike} degrees out.`
            })
        })
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server up running on PORT " + PORT);
})