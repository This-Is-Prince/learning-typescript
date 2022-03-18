// type is inferred
var person = {
    name: "Prince",
    age: 30
};
// this is not better
var person1 = {
    age: 21,
    name: "Prince"
};
/*
console.log(person.nickname); // ERROR, Property 'nickname' does not exist on type '{ name: string; age: number; }'
 */
console.log(person);
console.log(person1);
