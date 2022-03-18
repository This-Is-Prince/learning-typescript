function add(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
): number {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let num: number;
// num='5' // ERROR, type is number
num = 5;

let num1 = 5;
// const num2:number = 2.8; // explicitly give type
const num2 = 2.8; // type inference
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(num1, num2, printResult, resultPhrase);
