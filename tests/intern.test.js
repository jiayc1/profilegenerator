const intern = require("../js/intern");

test("Can set school using constructor", () => {
  const school = "UCI";
  const e = new intern("Jess", 22, "jess@gmail.com", school);
  expect(e.school).toBe(school);
});

test("getRole() should return intern", () => {
  const role = "intern";
  const e = new intern("Jess", 22, "jess@gmail.com", "UCLA");
  expect(e.getRole()).toBe(role);
});

test("Can get school using getSchool()", () => {
  const school = "UCI";
  const e = new intern("Jess", 22, "jess@gmail.com", school);
  expect(e.getSchool()).toBe(school);
});
