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
  res.render("index", { title: "MakersBnB", userCount });
  // Jake from Elsevier gave me the code below. Changes I made: plugged in 'index' &  to connect to .ejs
  // It's for error message generation
  // try {
  //   await User.count()
  //   res.render('index') // what it should render
  // } catch (err) {
  //   console.error('Error', err)
  //   res.render('error')
  // }
});


// Fix this post request so that user's input is taken
// action="/" method="POST" added to <form> index.ejs
// router.post("/", async function (req, res) {
//   const {username, email, birthday, password} = res.body
//   res.end()
//   try {
//     const Acct = await User.create({username, email, birthday, password})

//     return res.json(Acct)
//   } catch(err) {
//       console.log(err)
//       return res.status(500).json(err)
//   }
// })

router.post('/', (req, res) => {
  var usernamef = req.body.username;
  var emailf = req.body.email;
  var birthdayf = req.body.birthday;
  var passwordf = req.body.password;
  
  const user = User.create({ username: usernamef, email: emailf, birthday: birthdayf, password: passwordf })
  console.log( user instanceof User);
  //const { username, email, birthday, password } = req.body
  // return User.create( { username, email, birthday, password })
  //  .then((user) => res.send(user))
  //  .catch((err) => {
  //    console.log('***There was an error creating user', JSON.stringify(user))
  //   return res.status(400).send(err)
  //  })
});



module.exports = router;

