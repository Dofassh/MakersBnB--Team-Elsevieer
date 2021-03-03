var express = require("express");
var { User } = require("../database");
var router = express.Router();
// Line below allows use of res.body in line 23
router.use(express.json())
/* GET home page. */
router.get("/", async function (req, res, next) {
  var userCount = await User.count();
  res.render("index", { title: "MakersBnB", userCount });
  // Jake from Elsevier gave me the code below. Changes I made: plugged in 'index' &  to connect to .ejs
  // It's for error message generation
  try {
    await User.count()
    res.render('index') // what it should render
  } catch (err) {
    console.error('Error', err)
    res.render('error')
  }
});

// Fix this post request so that user's input is taken
// action="/" method="POST" added to <form> index.ejs
router.post("/", async function (req, res) {
  const {username, email, birthday, password} = res.body
  res.end()
  try {
    const Acct = await User.create({username, email, birthday, password})

    return res.json(Acct)
  } catch(err) {
      console.log(err)
      return res.status(500).json(err)
  }
})


module.exports = router;
