"use strict";
// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property Decorator.");
//   console.log(target);
//   console.log(propertyName);
// }
// class Product {
//   @Log
//   title: string;
//   _price: number;
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid Price - should be positive.");
//     }
//   }
//   constructor(t: string, p: number) {
//     this._price = p;
//     this.title = t;
//   }
//   getPriceWithTax(tax: number) {
//     return this._price * (1 + tax);
//   }
// }
// const product1 = new Product("Prince", 10);
