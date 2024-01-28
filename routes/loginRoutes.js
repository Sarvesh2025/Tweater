const express = require('express');
const app = express();
const router = express.Router();

app.set("view engine", "pug");
app.set("views", "views");

router.get("/",(req, res, next) => {                         // payload is used to transfer data to rendering page .
    res.status(200).render("login");
})

module.exports = router;
