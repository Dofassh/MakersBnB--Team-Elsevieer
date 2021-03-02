const { Sequelize, DataTypes } = require("sequelize");
var { User, userFields } = require("./models/user.js");

const database = new Sequelize(
  "sqlite:db/database." + process.env.NODE_ENV + ".db",
  {
    logging: false,
    logging: console.log // Uncomment this to get visibility over database queries!
  }
);

User.init(userFields, { sequelize: database, modelName: "user" });

module.exports = { User, database };
