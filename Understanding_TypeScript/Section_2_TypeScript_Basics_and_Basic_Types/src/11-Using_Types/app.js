function first() {
    // 1.First
    function add(n1, n2) {
        return n1 + n2;
    }
    var number1 = 5;
    var number2 = 2.8;
    var result = add(number1, number2);
    console.log(result);
}
function second() {
    // 1.First
    function add(n1, n2) {
        return n1 + n2;
    }
    var number1 = "5";
    var number2 = 2.8;
    var result = add(number1, number2);
    console.log(result);
}
function third() {
    // 1.First
    function add(n1, n2) {
        return n1 + n2;
    }
    var number1 = "5";
    var number2 = 2.8;
    //   const result = add(number1, number2); // ERROR, Argument of type 'string' is not assignable to parameter of type 'number'
    var result = add(+number1, number2);
    console.log(result);
}
first();
second();
third();
