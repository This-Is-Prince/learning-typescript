// 1.Example

// const person = {
//   name: "Prince",
//   age: 21,
// };

// console.log(person.nickname);//error
// console.log(person.name);
// console.log(person.age);

// 2.Example

// const person: object = {
//   name: "Prince",
//   age: 21,
// };

// Error because person type is object
// console.log(person.name);
// console.log(person.age);

// 3.Example

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Prince",
//   age: 21,
// };
// console.log(person.age);
// console.log(person.name);

// 4.Example

// const person = {
//   name: "Prince",
//   age: 21,
//   hobbies: ["Sports", "Coding"],
// };
// let favoriteActivities: string[];
// favoriteActivities=hi; //error
// favoriteActivities = ["hi"];
// favoriteActivities=['hi',1] //error because only string value is possible
// let favoriteActivities: any[];
// favoriteActivities = ["hi", 1]; //no error (any type value can be in array)

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// console.log(hobby.map()); //  ERROR !!!
// }

// 5.Example

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Prince",
//   age: 21,
//   hobbies: ["Sports", "Coding"],
//   role: [2, "author"],
// };

// person.role.push("admin");
// person.role[1]=10 //error
// person.role=[0,'hi','hey']//error
// console.log(person);

// Enum

// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }

// enum Role {
//   ADMIN = 5,
//   READ_ONLY, // 6
//   AUTHOR, // 7
// }

// enum Role {
//   ADMIN = 5,
//   READ_ONLY = 100,
//   AUTHOR = 200,
// }

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person = {
  name: "Prince",
  age: 21,
  hobbies: ["Sports", "Coding"],
  role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
  console.log("is Admin");
  console.log(Role);
}
