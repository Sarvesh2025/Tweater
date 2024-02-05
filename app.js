const express = require('express');
const app = express();
const port = 3003;
const middleware = require('./middleware');
const path = require('path');
const bodyParser = require("body-parser");

const mongoose = require('mongoose');   // mongoose is imported

mongoose.connect('mongodb+srv://sarveshpandey:AR2DEqt5xtRdD8tQ@tweater.qobp4xk.mongodb.net/?retryWrites=true&w=majority').
    then(() => {
        console.log('Connection is strong');
    })
    .catch((err) => {
        console.log("Error is found" +err);
    })

/// database is connected using mongoose 
    

function func() {
    console.log("Server is started");
}

// call back function for starting the server 


const server = app.listen(port, func);
app.set("view engine", "pug");
app.set("views", "views");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));// to make the public folder static




// Routes

const loginRoute = require("./routes/loginRoutes");
app.use("/login", loginRoute);

const registerRoute = require("./routes/registerRoutes");
app.use("/register", registerRoute);




app.get("/", middleware.requireLogin,(req, res, next) => {
    var payload = {
        pageTitle: "Home"
    }                            // payload is used to transfer data to rendering page .
    res.status(200).render("home",payload);
});
















 