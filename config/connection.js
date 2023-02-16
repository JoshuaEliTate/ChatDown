const Sequelize = require("sequelize");

console.log(process.env.DB_NAME);

const sequelize = new Sequelize(
  {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
      socketPath: "/tmp/mysql.sock",
    },
  }
);

module.exports = sequelize;
