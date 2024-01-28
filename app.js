const express = require('express');
const app = express();
const port = 3003;
const middleware = require('./middleware');

function func() {
    console.log("Server is started");
}

const server = app.listen(port, func);
app.set("view engine", "pug");
app.set("views", "views");




// Routes
const loginRoute = require("./routes/loginRoutes");
app.use("/login", loginRoute);

app.get("/", middleware.requireLogin,(req, res, next) => {
    var payload = {
        pageTitle: "Home"
    }                            // payload is used to transfer data to rendering page .
    res.status(200).render("home",payload);
});
