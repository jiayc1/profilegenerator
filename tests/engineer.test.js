const engineer = require("../js/engineer");


test("getRole() should return engineer", () => {
  const role = "engineer";
  const e = new engineer("Jess", 22, "jess@gmail.com", "JOJO123");
  expect(e.getRole()).toBe(role);
});

test("Can get GitHub username using getGithub()", () => {
  const github = "JOJO123";
  const e = new engineer("Jess", 22, "jess@gmail.com", github);
  expect(e.getGithub()).toBe(github);
});