const { Model, DataTypes } = require("sequelize");

class User extends Model {}

var userFields = {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  birthday: DataTypes.DATE,
  password: DataTypes.STRING
};


module.exports = { User, userFields };