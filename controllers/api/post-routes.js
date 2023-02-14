const router = require("express").Router();
const { PostComment} = require("../../models");

// CREATE new post
router.post("/", async (req, res) => {
  console.log(req.body.message)
  console.log(req.body.city)
  try {
    console.log(req.body.city)
    console.log(req.body.message);
    const postComment = await PostComment.create({
      message: req.body.message,
      location: req.body.city
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



router.get("/", async (req, res) => {
  try {
    const postComment = await PostComment.findAll({});

    const getData = postComment.map((postComment) =>
      getData.get({ plain: true })
    );
    res.render("homepage", {
      postComment,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});