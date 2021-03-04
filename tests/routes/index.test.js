const { User } = require("../../database");

describe("MakersBnB Index", () => {
  it("has title MakersBnB", async () => {
    // The port is 4444 here because it is your test server, not your real one
    await page.goto("http://localhost:4444/");
    await expect(page).toMatchElement("title", { text: "MakersBnB" });
  });

  it("welcomes the visitor", async () => {
    await page.goto("http://localhost:4444/");
    await expect(page).toMatchElement("h1", { text: "Welcome to MakersBnB!" });
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
      await expect(page).toFillForm('form[name="signUp"]', {
        username: "James",
        email: "james@gmail.com",
        birthday: "08/25/1999",
        password: "password",
      });
      await page.click("#submit");
      await page.screenshot({ path: "tmp/screenshot.png", fullPage: true });
      await expect(page).toMatch("There are 1 users signed up.");
    });
  });
  // describe("when user attempt login", () => {
  //   it("checks for user authenication", async () => {
  //     // needs statement here that causes sign up process without having to copy last test
  //     await page.goto("http://localhost:4444/sign-in");
  //     await expect(page).toFillForm('form[name="signIn"]', {
  //       email: "james@gmail.com",
  //       password: "password",
  //     });
  //     await page.click("#submit");
  //     // insert authenication process here
  //   });
  // });
});
