// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }
// let user1: Person;

// user1 = {
//   name: "Prince",
//   age: 21,
//   greet(str: string) {
//     console.log(str + " " + this.name);
//   },
// };

// user1.greet("Prince");

interface Greetable {
  readonly name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 21;

  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
    this.name = "Prince Kumar";
  }
}
new Person("Prince").name = "Prince";
