const { User } = require("../models");

const userData = [
  {
    username: "admin",
    password: "password",
  },
  {
    username: "testuser",
    password: "password",
  },
  {
    username: "dev",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
