var express = require("express");
var { User } = require("../database");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  var userCount = await User.count();
  res.render("index", { title: "MakersBnB", userCount });
});

module.exports = router;
