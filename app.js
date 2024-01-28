const express = require('express');
const app = express();
const port = 3003;

function func() {
    console.log("Server is started");
}

app.set("view engine", "pug");
app.set("views", "views");

const server = app.listen(port, func);
app.get("/", (req, res, next) => {
    var payload = {
        pageTitle: "Home"
    }                            // payload is used to transfer data to rendering page .
    res.status(200).render("home",payload);
});
