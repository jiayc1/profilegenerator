const employee = require("../js/employee");

test("can set up a new employee", () => {
  const e = new employee();
  expect(typeof(e)).toBe("object");
});

test("can assign a new employee name", () => {
  const name = "Jess";
  const e = new employee(name);
  expect(e.name).toBe(name);
});

test("can assign employee id", () => {
  const id = 22;
  const e = new employee("Jess", id);
  expect(e.id).toBe(id);
});

test("can assign employee email", () => {
  const email = "jess@gmail.com";
  const e = new employee("Jess", 22, email);
  expect(e.email).toBe(email);
});

test("Can retrieve name from getName()", () => {
  const name = "Jess";
  const e = new employee(name);
  expect(e.getName()).toBe(name);
});

test("can retrieve id from getid()", () => {
  const id = 22;
  const e = new employee("Jess", id);
  expect(e.getId()).toBe(id);
});

test("Can get email via getEmail()", () => {
  const email = "jess@gmail.com";
  const e = new employee("jess", 22, email);
  expect(e.getEmail()).toBe(email);
});

test("To return 'employee'", () => {
  const role = "employee";
  const e = new employee("Jess", 22, "jess@gmail.com");
  expect(e.getRole()).toBe(role);
});
