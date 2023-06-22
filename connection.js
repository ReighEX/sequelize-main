const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db", "root", "password", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = {
  connection: sequelize,
};