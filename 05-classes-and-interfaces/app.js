"use strict";
// interface Person {
//   name: string;
//   age: number;
class Person {
    name;
    age = 21;
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
        this.name = "Prince Kumar";
    }
}
new Person("Prince").name = "Prince";
