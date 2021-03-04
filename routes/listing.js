var express = require("express");
var { User } = require("../database");
var router = express.Router();
var bodyParser = require('body-parser');
const app = express();


router.get("/", async function (req, res, next) {
    //var userCount = await User.count();
    res.render("listing");
});








module.exports = router;