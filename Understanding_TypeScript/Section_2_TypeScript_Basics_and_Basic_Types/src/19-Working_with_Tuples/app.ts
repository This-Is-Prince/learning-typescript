/* const person = {
  name: "Prince",
  age: 21,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

console.log(person);

person.role.push("admin");
person.role[1] = 10;

for (const key in person) {
  console.log(person[key]);
}
 */
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Prince",
  age: 21,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

console.log(person);

person.role.push("admin"); // This is exception
// person.role[1] = 10; // ERROR, Type 'number' is not assignable to type 'string'.

person.role = [0, "admin"]; // this will work
// person.role=[0] // ERROR, this will not work
// person.role=[0,"Hello","Bye"] // ERROR, this will not work

for (const key in person) {
  console.log(person[key]);
}
