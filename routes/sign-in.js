var express = require("express");
var { User } = require("../database");
var router = express.Router();
var bodyParser = require("body-parser");


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/* GET home page. */

router.get("/sign-in", async function (req, res, next) {
  res.render("sign-in", { title: "MakersBnB" });
});

router.post("/sign-in", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = User.findAll({ email, password })
  // add authentication functionality here
    .then((user) => res.redirect("/"))
    .catch((err) => {
      console.log("***There was an error finding user", JSON.stringify(user));
      return res.status(400).send(err);
    });
});

module.exports = router;