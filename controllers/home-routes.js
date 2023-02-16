const { User, PostComment, PostReply } = require("../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const dbPostData = await PostComment.findAll({
      attributes: ["id", "message", "location", "user_id"],
      include: {
        model: PostReply,
        attributes: ["id", "reply_comment", "comment_id", "postcomment_id"],
      },
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));
    posts.reverse();

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
