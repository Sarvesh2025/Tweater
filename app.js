const express = require('express');
const app = express();
const port = 3003;
const middleware = require('./middleware');
const path = require('path');
const bodyParser = require("body-parser")
const mongoose = require('./database');
// mongoose is imported
                                  
const session = require("express-session");

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

app.use(session({
    secret: "bbq chips",
    resave: true,
    saveUninitialized: false
}));


// Routes

const loginRoute = require("./routes/loginRoutes");
app.use("/login", loginRoute);

const registerRoute = require("./routes/registerRoutes");
app.use("/register", registerRoute);




app.get("/", middleware.requireLogin,(req, res, next) => {
    var payload = {
        pageTitle: "Home",
        userLoggedIn:req.session.user
    }                            // payload is used to transfer data to rendering page .
    res.status(200).render("home",payload);
});
















 