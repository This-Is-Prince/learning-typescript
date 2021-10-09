"use strict";
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
    userInputElement.value = "hi bro";
}
const errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!",
};
function add(a, b) {
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
