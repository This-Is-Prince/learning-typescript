var message = "hello!";
// message(); //Error
var user = {
    name: "Daniel",
    age: 26
};
// user.location; //Error
var announcement = "Hello World!";
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
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + "!");
    console.log("Hello " + person + ", today is " + date.toString() + "!");
}
console.log("calling brendan");
greet("Brendan", new Date());
var msg = "hello there!";
