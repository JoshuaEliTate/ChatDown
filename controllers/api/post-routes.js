const router = require("express").Router();
const { PostComment } = require("../../models");

// CREATE new post
router.post("/", async (req, res) => {
  console.log(req.body.message);
  console.log(req.body.city);
  try {
    console.log(req.body.city);
    console.log(req.body.message);
    const postComment = await PostComment.create({
      message: req.body.message,
      location: req.body.city,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(postComment);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
