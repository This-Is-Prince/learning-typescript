// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }

// function add(n1:number,n2:number):string{
//   return n1+n2; // Error
// }

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// function printResult(num: number) {
//   console.log("Result: " + num);
//   //returning type void;
// }

// function printResult(num: number): undefined {
//   //Error
//   console.log("Result: " + num);
//   // not  returning undefined
// }

// function printResult(num: number): undefined {
//   console.log("Result: " + num);
//   return;
// }

// printResult(add(5, 12));

// Functions as Types

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// function printResult(num: number): void {
//   console.log("Result: " + num);
// }

// printResult(add(5, 12));

// let combineValues;

// combineValues = add;
// combineValues = 5; // No Error
// console.log(combineValues(8, 8)); // Error

// let combineValues:Function;

// combineValues = add;
// combineValues = 5; // Error
// console.log(combineValues(8, 8));

// let combineValues: (a: number, b: number) => number;

// combineValues = add;
// combineValues = 5; //Error
// console.log(combineValues(8, 8));

// Function Types & Callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(5, 5, (num) => console.log(num));
