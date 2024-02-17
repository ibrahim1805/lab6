// Task 1: Working with Variables
// Declare a variable named myNumber and assign it the value of 10.
let myNumber = 10;

// Declare another variable named myString and assign it the value of "Hello, JavaScript!".
let myString = "Hello, JavaScript!";

// Print both variables to the console using console.log().
console.log("myNumber:", myNumber);
console.log("myString:", myString);

// Task 2: Exploring Loops
// Use a for loop to iterate from 0 to 10. Within the loop, print the current number to the console.
for (let i = 0; i <= 10; i++) {
  console.log("Current number:", i);
}

// Use a for loop to calculate and print the first 5 multiples of 3.
for (let i = 1; i <= 5; i++) {
  console.log("Multiple of 3:", 3 * i);
}

// Task 3: Discovering Functions
// Define a function named addNumbers that takes two parameters, num1 and num2.
function addNumbers(num1, num2) {
  // Inside the function, add num1 and num2 together and return the result.
  return num1 + num2;
}

// Call addNumbers with two arguments of your choice and print the result to the console.
let resultAdd = addNumbers(5, 3);
console.log("Result of addition:", resultAdd);

// Define another function named multiplyNumbers that takes two parameters and returns their product.
function multiplyNumbers(num1, num2) {
  // Inside the function, multiply num1 and num2 together and return the result.
  return num1 * num2;
}

// Call multiplyNumbers with two arguments and print the result to the console.
let resultMultiply = multiplyNumbers(4, 6);
console.log("Result of multiplication:", resultMultiply);