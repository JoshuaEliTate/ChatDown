const router = require("express").Router();
const { PostReply } = require("../../models");

// CREATE new post Reply
router.post("/", async (req, res) => {
  console.log(req.body.replyComment)
  try {
    console.log(req.body.replyComment)
    const postReply = await PostReply.create({
      reply_comment: req.body.replyComment,
      comment_id: req.body.commentId
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(postReply);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;