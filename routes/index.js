var express = require("express");
var { User } = require("../database");
var router = express.Router();
var bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Line below allows use of res.body in line 23
//router.use(express.json())
/* GET home page. */

router.get("/", async function (req, res, next) {
  var userCount = await User.count();
  var portNumber = process.env.PORT
  console.log(portNumber);
  res.render("index", { title: "MakersBnB", userCount, portNumber });
});

router.post('/listing', (req, res) => {
  var usernamef = req.body.username;
  var emailf = req.body.email;
  var birthdayf = req.body.birthday;
  var passwordf = req.body.password;
  console.log(usernamef);
  console.log('before create user')
  const user = User.create({ username: usernamef, email: emailf, birthday: birthdayf, password: passwordf})
  console.log(user);
  res.render("listing", { username: usernamef});
  res.redirect("/listing")
});

//  router.get('/listing', function(req, res) {
//    res.sendFile(path.join(__dirname+'/listing.ejs'));
//  });


module.exports = router;

