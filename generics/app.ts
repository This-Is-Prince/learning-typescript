// const names: Array<string> = [];
// names[0].split('');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   console.log(data.split(""));
// });

// 1.

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: "Prince" }, { age: 30 }) as {
//   name: string;
//   age: number;
// };

// mergedObj.age;

// 2.

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge("Prince", { age: 30 });

console.log(mergedObj.age);
console.log(mergedObj);
