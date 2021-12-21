const message = "hello!";
// message(); //Error

const user = {
  name: "Daniel",
  age: 26,
};
// user.location; //Error

const announcement = "Hello World!";
announcement.toLocaleLowerCase();
// announcement.toLocalLowerCase(); //Error

function flipCoin() {
  //   return Math.random < 0.5; //Error
}

// const value = Math.random() < 0.5 ? "a" : "b";
// if (value !== "a") {
//   // ...
// } else if (value === "b") {
//   // Oops, unreachable
// }
console.log("hello World");

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  console.log(`Hello ${person}, today is ${date.toString()}!`);
}
console.log("calling brendan");

greet("Brendan", new Date());

let msg = "hello there!";
