// type is inferred
const person = {
  name: "Prince",
  age: 30,
};

// this is not better
const person1: {
  name: string;
  age: number;
} = {
  age: 21,
  name: "Prince",
};

/* 
console.log(person.nickname); // ERROR, Property 'nickname' does not exist on type '{ name: string; age: number; }'
 */
console.log(person);
console.log(person1);
