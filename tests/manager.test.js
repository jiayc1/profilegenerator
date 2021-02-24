const manager = require("../js/manager");

test("Can set office number with constructor argument", () => {
  const officenumber = 100;
  const e = new manager("Jess", 22, "jess@gmail.com", officenumber);
  expect(e.officeNumber).toBe(officenumber);
});

test("getRole() should return manager", () => {
  const role = "manager";
  const e = new manager("Jess", 22, "jess@gmail.com", 100);
  expect(e.getRole()).toBe(role);
});

test("Can get office number using getOffice()", () => {
  const officenumber = 100;
  const e = new manager("Jess", 22, "jess@gmail.com", officenumber);
  expect(e.getOfficeNumber()).toBe(officenumber);
});