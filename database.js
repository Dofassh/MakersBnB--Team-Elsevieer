const { Sequelize, DataTypes } = require("sequelize");
var { User, userFields } = require("./models/user.js");
var { Listing, listingFields } = require("./models/listing.js");

const database = new Sequelize(
  "sqlite:db/database." + process.env.NODE_ENV + ".db",
  {
    logging: false,
    // logging: console.log // Uncomment this to get visibility over database queries!
  }
);

User.init(userFields, { sequelize: database, modelName: "user" });
Listing.init(listingFields, { sequelize: database, modelName: "listing" });

module.exports = { User, Listing, database };

