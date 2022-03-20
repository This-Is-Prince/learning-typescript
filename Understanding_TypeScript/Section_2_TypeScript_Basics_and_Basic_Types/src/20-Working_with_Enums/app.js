var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "Author";
})(Role || (Role = {}));
var person = {
    name: "Prince",
    age: 22,
    hobbies: ["Sports", "Coding"],
    role: Role.ADMIN
};
console.log(person);
if (person.role === Role.ADMIN) {
    console.log("Person role is admin");
}
