const num1 = 100;
const num2 = 50;
let val;

// simple math with numbers
// add
val = num1 + num2; // 150

// subtract
val = num1 - num2; // 50

// multiply
val = num1 * num2; // 5000

// divide
val = num1 / num2; // 2

// find remainder
val = num1 % num2; // 0

// Math object
val = Math.PI; // 3.1415....
val = Math.E; // (Euler's number) 2.718...
val = Math.round(2.8); // 3
val = Math.round(2.4); // 2
val = Math.ceil(2.4); // 3
val = Math.floor(2.8); // 2
val = Math.sqrt(64); // 8
val = Math.abs(-3); // 3
val = Math.pow(8, 2); // 64
val = Math.min(2, 33, 4, 1, 55, 6, -2); // -2
val = Math.max(2, 33, 4, 1, 55, 6, -2); // 55
val = Math.random(); // ** random decimal
// from 0 upto (but not including) 1

// generate random whole number b/t 0 & 20
val = Math.floor(Math.random() * 20 + 1);
