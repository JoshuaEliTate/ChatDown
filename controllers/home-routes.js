const { User, PostComment, PostReply } = require("../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const dbPostData = await PostComment.findAll({
      attributes: ["id", "message", "location", "user_id"],
      include: [
        {
          model: User,
          attributes: ["id"],
        },
      ],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));
    posts.reverse();

    const dbPostData2 = await PostReply.findAll({
      attributes: ["id", "reply_comment", "comment_id", "postcomment_id"],
    });

    const posts2 = dbPostData2.map((post) => post.get({ plain: true }));

    console.log(posts);
    console.log(posts2);

    res.render("homepage", { posts, posts2, loggedIn: req.session.loggedIn });
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
