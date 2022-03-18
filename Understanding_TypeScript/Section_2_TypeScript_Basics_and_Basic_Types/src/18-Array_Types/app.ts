const person = {
  name: "Prince",
  age: 21,
  hobbies: ["Sports", "Cooking", `Dancing`],
};

let favoriteActivities: string[];
favoriteActivities = [];
favoriteActivities = ["Sports", `Cricket`, "Codding"];
/* favoriteActivities=["Sports",1,true] // ERROR, Type 'number' 'boolean' is not assignable to type 'string' */

console.log(person);
console.log(favoriteActivities);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
for (const key in person) {
  console.log(key, person[key]);
}
