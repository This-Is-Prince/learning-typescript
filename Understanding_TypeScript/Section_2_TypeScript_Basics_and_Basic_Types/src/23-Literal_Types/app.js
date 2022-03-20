var number2 = 2.8; // Literal type 2.8
function combine(input1, input2, resultConversion) {
    var result;
    if (resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
var combinedNames = combine("Prince", "Kumar", "as-text");
console.log(combinedNames);
