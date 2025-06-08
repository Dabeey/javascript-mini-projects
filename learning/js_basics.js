/*
//////////// BASICS ///////////

let x = 30
let y = 8

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

// Higher-order function that takes another function as an argument
// and returns the result of that function applied to two numbers.
// This is an example of a function that takes other functions as parameters.
// It allows for flexible operations on the numbers x and y.
// This is a common pattern in functional programming.
function calculate(x, y, operation) {
    return operation(x, y);
}

console.log(calculate(x, y, add));        // 38
console.log(calculate(x, y, subtract));   // 22
console.log(calculate(x, y, multiply));   // 240
console.log(calculate(x, y, divide));     // 3.75
console.log(calculate(x, y, modulus));    // 6
console.log(calculate(x, y, power));      // 16777216
console.log()


// console.log(5 == '5');   // true (loose equality)
// console.log(5 === '5');  // false (strict equality)
// console.log(5 != '5');   // false
// console.log(5 !== '5');  // true
// console.log(5 > 4);      // true
// console.log(5 <= 5);     // true


let a = 5;
let b = '5';
let c = 10;

console.log(a == b);   // ?
console.log(a === b);  // ?
console.log(a + b);    // ?
console.log(a + c);    // ?
console.log(a + b < c);// ?
console.log()


console.log(true + false);         // ?
console.log(12 / "6");             // ?
console.log("number" + 15 + 3);    // ?
console.log(15 + 3 + "number");    // ?
console.log([1] > null);           // ?
console.log()

*/



////////////////// CONTROL FLOW /////////////////

// IF...ELSE
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// ELSE...IF
let score = 70;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "C";
}

// SWITCH STATEMENT
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Regular day.");
}
console.log();


// FOR LOOP
for (let i = 0; i < 5; i++) {
  console.log(i); // Prints 0, 1, 2, 3, 4
}
console.log();

//WHILE LOOP
let count = 0;
while (count < 5) {
  console.log(count); // Prints 0, 1, 2, 3, 4
  count++;
}
console.log();


//DO-WHILE LOOP
let x = 0;
do {
  console.log(x); // Prints 0 (even if condition is false)
  x++;
} while (x < 0);
console.log();

// BREAK & CONTINUE
for (let i = 0; i < 10; i++) {
  if (i === 5) break; // Stops at 5
  if (i % 2 === 0) continue; // Skips even numbers
  console.log(i); // Prints 1, 3
}
console.log();

// TERNARY OPERATOR
let age_old = 20;
let message = age_old >= 18 ? "Adult" : "Minor";
console.log(message); // "Adult"



/////////////// FUNCTIONS ////////////////

// FUNCTION DECLARATION (HOISTED)
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"

// FUNCTION EXPRESSION (NOT HOISTED)
const greet = function(name) {
  return `Hello, ${name}!`;
};
console.log(greet("Bob")); // "Hello, Bob!"


// ARROW FUNCTION (ES6+)
const greetArrow = (name) => `Hello, ${name}!`;
console.log(greetArrow("Charlie")); // "Hello, Charlie!"

const add = (a, b) => a + b; // Arrow function with two parameters
console.log(add(2, 3)); // 5

const square = (x) => x * x;  // Arrow function with single parameter
console.log(square(4)); // 16
console.log(square(5)); // 25

const sayHi = () => console.log("Hi!"); // If no parameters
sayHi(); // "Hi!"



///////////////////// PARAMETERS AND ARGUEMENTS /////////////////
function multiply(a, b) { // a, b are parameters
  return a * b;
}
multiply(3, 4); // 3, 4 are arguments



////////////// RETURN STATEMENTS //////////////////
function noReturn() {
  // No return statement
}
console.log(noReturn()); // undefined


//////////////////////// SCOPE //////////////////////
let globalVar = "I'm global!";

function testScope() {
  let functionVar = "I'm in a function!";
  if (true) {
    let blockVar = "I'm in a block!";
    console.log(blockVar); // Works
  }
  console.log(blockVar); // Error! (block-scoped)
}
testScope();
console.log(functionVar); // Error! (function-scoped)


/////////////////////// HOISTING ////////////////////////
console.log(x); // undefined (var is hoisted)
var b = 5;

console.log(y); // Error (let/const are not hoisted)
let y = 10;


///////////////////// CLOSURES ///////////////////////
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2