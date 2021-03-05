var express = require("express");
var { Listing } = require("../database");
var router = express.Router();
var bodyParser = require('body-parser');
const app = express();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", async function (req, res, next) {
    res.render("listing", { title: "MakersBnB" });
});

router.post("/", (req, res) => {
    const { name, description, price, availableFrom, availableTo } = req.body;
    console.log(req.body);
    const listing = Listing.create({ name, description, price, availableFrom, availableTo })
      .then((listing) => res.redirect("/listing"))
      .catch((err) => {
        console.log("***There was an error creating user", JSON.stringify(user));
        return res.status(400).send(err);
      });
  });






module.exports = router;