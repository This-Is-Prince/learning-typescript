// const paragraph = document.getElementById("message-output");
// console.log(paragraph);

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")
// );
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;

// userInputElement.value = "Hi There!";

const userInputElement = document.getElementById("user-input");
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "hi bro";
}
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};

// console.log(errorBag);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// function overloading

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
const result_1 = add(1, 5);
const result_2 = add("Prince", " Kumar");
const result_3 = add(1, "Kumar");
const result_4 = add("Prince", 5);

console.log(result_1);
console.log(result_2);
console.log(result_3);
console.log(result_4);
