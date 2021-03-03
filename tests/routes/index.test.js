const { User } = require("../../database");

describe("MakersBnB Index", () => {
  it("has title MakersBnB", async () => {
    // The port is 4444 here because it is your test server, not your real one
    await page.goto("http://localhost:4444/");
    await expect(page).toMatchElement("title", { text: "MakersBnB" });
  });

  it("welcomes the visitor", async () => {
    await page.goto("http://localhost:4444/");
    await expect(page).toMatchElement("p", { text: "Welcome to MakersBnB" });
  });

  describe("when there are no users", () => {
    it("shows that there are no users", async () => {
      await page.goto("http://localhost:4444/");
      await expect(page).toMatchElement("p", {
        text: "There are 0 users signed up.",
      });
    });
  });
  describe("when there are users", () => {
    it("shows that there are users", async () => {
      await page.goto("http://localhost:4444/");
      // await page.type('#username', 'foo');
      // await page.type('#email', 'foo@example.com');
      // await page.type('#birthday', '1999/08/25');
      // await page.type('#password', 'password');
      await expect(page).toFillForm('form[name="signUp"]', {
        username: "James",
        email: "Bond",
        birthday: "1999/08/25",
        password: "password",
      });
      await page.click("#submit");
      await expect(page).toMatchElement("p", {
        text: "There are 0 users signed up.",
      });
    });
  });
});
