require("dotenv").config(); // this is important!
module.exports = {
  development: {
    username: "user",
    password: "",
    database: "simple-wrestling-dev",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: 0
  },
  test: {
    username: "user",
    password: null,
    database: "simple-wrestling-dev",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: 0
  },
  production: {
    username: process.env.USERNAME_PRODUCTION,
    password: process.env.PASSWORD_PRODUCTION,
    database: process.env.DATABSE_PRODUCTION,
    host: process.env.HOST_PRODUCTION,
    dialect: "postgres",
    operatorsAliases: 0
  }
};
