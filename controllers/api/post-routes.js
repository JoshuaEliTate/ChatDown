const router = require("express").Router();
const { PostComment } = require("../../models");

// CREATE new post
router.post("/", async (req, res) => {
  let city = "";
  const newCity = function fetchLocation() {
    var requestUrl = "http://ip-api.com/json/";

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(async function (data) {
        let city = data.city;
        feedEnd(city);
      });
  };

  var feedEnd = async (city) => {
    try {
      const postComment = await PostComment.create({
        user_id: req.session.user_id,
        username: req.session.username,
        message: req.body.message,
        location: city,
      });

      req.session.save(() => {
        req.session.loggedIn = true;

        res.status(200).json(postComment);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
  newCity();
});

module.exports = router;
