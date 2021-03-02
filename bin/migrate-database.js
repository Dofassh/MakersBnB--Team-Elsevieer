var { database } = require("../database.js");

console.log("Migrating database to latest version");
database.sync({ alter: true }).then(() => {
  console.log("Done!");
});
