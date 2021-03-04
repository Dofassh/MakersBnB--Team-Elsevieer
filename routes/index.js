var express = require("express");
var { User } = require("../database");
var router = express.Router();
var bodyParser = require('body-parser');
//const app = express();


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
// Line below allows use of res.body in line 23
//router.use(express.json())
/* GET home page. */

router.get("/", async function(req, res, next) {
  var userCount = await User.count();
  res.render("index", { title: "MakersBnB", userCount });
});


router.post("/", (req, res) => {
  const { username, email, birthday, password } = req.body
  console.log( req.body );
  const user =  User.create( { username, email, birthday, password })
   .then((user) => res.send(user))
   .catch((err) => {
    console.log('***There was an error creating user', JSON.stringify(user))
     return res.status(400).send(err)
   })
});




module.exports = router;

