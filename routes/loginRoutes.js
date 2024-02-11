const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const User = require('../schemas/UserSchema');

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {                         // payload is used to transfer data to rendering page .
    res.status(200).render("login");
})
router.post("/", async(req, res, next) => {// payload is used to transfer data to rendering page .
    var payload = req.body;

    if (req.body. logUsername && req.body.logPassword) {
            var user = await User.findOne({
            $or: [
                { userName:req.body. logUsername },            // code to check if email id or username alrready exist 
                { email: req.body. logUsername}
            ]
        })
            .catch((error) => {
                payload.errorMessage = "Something Went wrong";
                res.status(200).render("register", payload);
            });
        console.log(user);
        if (user != null) {
            var result = await bcrypt.compare(req.body.logPassword, user.password);
            console.log(result);
            if (result===true) {
                req.session.user = user;
                return res.redirect("/");
            }
        }
        payload.errorMessage = "Login credentials incorrect.";
        console.log(payload);
       return  res.status(200).render("login", payload);
    }
    payload.errorMessage = "Make sure each field has a valid value.";
    return res.status(200).render("login",payload);

})
module.exports = router;
