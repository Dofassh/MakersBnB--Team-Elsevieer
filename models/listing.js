const { Model, DataTypes } = require("sequelize");
class Listing extends Model {}

var listingFields = {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  availableFrom: DataTypes.DATE,
  availableTo: DataTypes.DATE,
};

module.exports = { Listing, listingFields };