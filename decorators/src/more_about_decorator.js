"use strict";
// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }
// function WithTemplate(template: string, hookID: string) {
//   return function (constructor: any) {
//     const hookEl = document.getElementById(hookID);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }
// // @Logger("LOGGING - PERSON")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Prince";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }
// const pers = new Person();
// console.log(pers);
