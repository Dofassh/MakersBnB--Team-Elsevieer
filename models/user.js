const { Model, DataTypes } = require("sequelize");

class User extends Model {}

var userFields = {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
};

module.exports = { User, userFields };
