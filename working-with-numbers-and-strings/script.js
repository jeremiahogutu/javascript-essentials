var a = 5;
var b = "4";
var c = "duck"

var sum = a + b; //result is 54
var subt = a - b; //result is 1
var mult = a * b; //result is 20
var div = a/b //result is 1.25

console.log(sum);
console.log(subt);
console.log(mult);
console.log(div);

//if we try to perform arithmetic operations with var c which is equal to duck we will  get NaN error meaning not a number

//example
var sum = a - c; //result is NaN
console.log(sum);