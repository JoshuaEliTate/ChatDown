// const Sequelize = require("sequelize");

// console.log(process.env.DB_NAME);

// const sequelize = new Sequelize({
//   database: process.env.DB_NAME,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: "localhost",
//   dialect: "mysql",
//   port: 3306,
//   dialectOptions: {
//     socketPath: "/tmp/mysql.sock",
//   },
// });
const Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host:  process.env.DB_HOST,
      dialect: 'mysql',
      port:  process.env.DB_PORT,
    },
  );
}

module.exports = sequelize;
