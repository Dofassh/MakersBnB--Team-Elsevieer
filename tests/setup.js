var { database, ...models } = require("../database");

beforeAll(async () => {
  // Sync schema structure changes to the database
  await database.sync();
});

beforeEach(async () => {
  // Clear database records before each test to ensure isolation
  await Promise.all(Object.values(models).map((model) => model.truncate()));
});
