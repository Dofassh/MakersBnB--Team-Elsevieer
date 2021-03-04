var router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    var userCount = await User.count();
    res.render("index", { title: "MakersBnB", userCount });
  })
);

module.exports = router;
