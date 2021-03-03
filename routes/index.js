var express = require("express");
var { User } = require("../database");
var router = express.Router();
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* GET home page. */

router.get("/", async function (req, res, next) {
  var userCount = await User.count();
  res.render("index", { title: "MakersBnB", userCount });
});

router.post('/', (req, res) => {
  var usernamef = req.body.username;
  var emailf = req.body.email;
  var birthdayf = req.body.birthday;
  var passwordf = req.body.password;
  
  const user = User.create({ username: usernamef, email: emailf, birthday: birthdayf, password: passwordf })
  
});

module.exports = router;

