const router = require("express").Router();
const { PostComment } = require("../../models");

// CREATE new post
router.post("/", async (req, res) => {
  try {
    const postComment = await PostComment.create({
      user_id: req.session.user_id,
      username: req.session.username,
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
