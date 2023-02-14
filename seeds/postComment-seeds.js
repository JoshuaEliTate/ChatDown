const { PostComment } = require("../models");

const postData = [
  {
    title: "POST TEST TITLE 1",
    content: "POST TEST CONTENT 1",
    user_id: 1,
  },
  {
    title: "POST TEST TITLE 2",
    content: "POST TEST CONTENT 2",
    user_id: 2,
  },
  {
    title: "POST TEST TITLE 3",
    content: "POST TEST CONTENT 3",
    user_id: 3,
  },
];

const seedPosts = () => PostComment.bulkCreate(postData);

module.exports = seedPosts;
