console.log("Type Aliases");

type Combinable = number | string;

type ConversionDescriptor = "as-number" | "as-text";
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result: Combinable;
  if (resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
}

type User = { name: string; age: number };

const u1: User = { name: "Prince", age: 30 }; // this works!
/* 
function greet(user: { name: string; age: number }) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
*/

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
