enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = "Author",
}

const person = {
  name: "Prince",
  age: 22,
  hobbies: ["Sports", "Coding"],
  role: Role.ADMIN,
};

console.log(person);

if (person.role === Role.ADMIN) {
  console.log("Person role is admin");
}
