// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// // const num1 = "5";
// const num1 = 5;
// const num2 = 2.8;

// const result = add(num1, num2);
// console.log(result);
// function add(n1: number, n2: number, showResult: boolean) {
//   if (showResult) {
//     console.log(n1 + n2);
//   } else {
//     return n1 + n2;
//   }
// }
// // const num1 = "5";
// const num1 = 5;
// const num2 = 2.8;
// const printResult = true;

// const result = add(num1, num2, printResult);
// console.log("-> " + result);

function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}
// const num1 = "5";

let num1: number;
// num1 = '5'; // error
num1 = 5;
// let num1: number = 5;
const num2 = 2.8;
const printResult = true;

const result = add(num1, num2, printResult);
console.log("-> " + result);
