var express = require("express");
var { User } = require("../database-test");
var router = express.Router();
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* GET home page. */
function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      next(err);
    }
  }
}

router.get("/", asyncHandler(async (req, res) => {
  var userCount = await User.count();
  res.render("index", { title: "MakersBnB", userCount });
}));

router.get("/:4444", asyncHandler(async (req, res) => {
  var userCount = await User.count();
  res.render("index", { title: "MakersBnB", userCount });
}));

// router.get("/", async function (req, res, next) {
//   var userCount = await User.count();
//   res.render("index", { title: "MakersBnB", userCount });
// });

router.post('/', (req, res) => {
  var usernamef = req.body.username;
  var emailf = req.body.email;
  var birthdayf = req.body.birthday;
  var passwordf = req.body.password;
  
  User.create({ username: usernamef, email: emailf, birthday: birthdayf, password: passwordf })
  
});

module.exports = router;
