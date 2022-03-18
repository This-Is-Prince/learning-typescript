var person = {
    name: "Prince",
    age: 21,
    hobbies: ["Sports", "Cooking", "Dancing"]
};
var favoriteActivities;
favoriteActivities = [];
favoriteActivities = ["Sports", "Cricket", "Codding"];
/* favoriteActivities=["Sports",1,true] // ERROR, Type 'number' 'boolean' is not assignable to type 'string' */
console.log(person);
console.log(favoriteActivities);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
for (var key in person) {
    console.log(key, person[key]);
}
