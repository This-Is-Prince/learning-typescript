// function combine(input1: number, input2: number) {
//   const result = input1 + input2;
//   return result;
// }

// const combinedAges = combine(30, 26);
// console.log(combinedAges);
// const combinedNames=combine('Prince',' Kumar'); // Error

// Union Types

// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     return input1.toString() + input2.toString();
//   }
//   return result;
// }
// const combinedAges = combine(30, 26);
// console.log(combinedAges);
// const combinedNames = combine("Prince", " Kumar");
// console.log(combinedNames);

// Literal TYpes

// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: "as-number" | "as-text"
// ) {
//   let result: number | string;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     return input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(30, 26, "as-number");
// console.log(combinedAges);

// const combinedStringAges = combine("30", "26", "as-number");
// console.log(combinedStringAges);

// const combinedNames = combine("Prince", " Kumar", "as-text");
// console.log(combinedNames);

// Type Aliases/Custom Types

// type Combinable = number;
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result: Combinable;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Prince", " Kumar", "as-text");
console.log(combinedNames);
