var { database } = require("../database.js");

console.log("Migrating test database to latest version");
database.sync({ alter: true }).then(() => {
  console.log("Done!");
});