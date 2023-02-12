const router = require("express").Router();
const { PostComment } = require("../../models");

// CREATE new post
router.post("/", async (req, res) => {
  console.log(req.body.message)
  try {
    console.log(req.body.message);
    const postComment = await PostComment.create({
      message: req.body.message,
      //   location: req.body.location,
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

// Login
// router.post("/login", async (req, res) => {
//   try {
//     const dbUserData = await User.findOne({
//       where: {
//         email: req.body.email,
//       },
//     });

//     if (!dbUserData) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password. Please try again!" });
//       return;
//     }

//     const validPassword = await dbUserData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password. Please try again!" });
//       return;
//     }

//     req.session.save(() => {
//       req.session.loggedIn = true;
//       console.log(
//         "🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie",
//         req.session.cookie
//       );

//       res
//         .status(200)
//         .json({ user: dbUserData, message: "You are now logged in!" });
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // Logout
// router.post("/logout", (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;
