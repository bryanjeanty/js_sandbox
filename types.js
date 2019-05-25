// two main data types in javascript

/* 
  primative data types:
  stored directly in the location the 
  variable accesses.
  stored on the stack
*/

/* 
  reference data types:
  accessed by reference
  deals with dynamically allocated memory
  objects that are stored on the heap
  a pointer to a location in memory
*/

// 6 primative data types
/*
  1. string
  2. Number
  3. Boolean
  4. Null
  5. Undefined
  6. Symbols (ES6)
*/

// 5 reference data types / objects
/*
  1. arrays
  2. object literals
  3. functions
  4. dates
  5. anything else...
*/

// JS is a dynamically typed language
// this means that types are associated
// with values and not variables

// primitive data types examples
// string
const name = "john";
console.log(typeof name); // string

// number
const age = 45;
console.log(typeof age); // number

// boolean
const hasKids = true;
console.log(hasKids); // boolean

// null
const car = null;
console.log(car); // object (this is a bug in JS)

// undefined
let test;
console.log(typeof test); // undefined

// symbol
let sym = Symbol();
console.log(typeof sym); // symbol

// reference data types examples
// should all return as objects
// array
const hobbies = ["movies", "music"];
console.log(typeof hobbies); // object

// object literal
const address = {
  city: "Boston",
  state: "MA"
};
console.log(typeof address); // object

// dates
const today = new Date();
console.log(typeof today); // object

// keep in mind that the reason they are all
// objects is because they are not being
// directly accessed. rather, they are being
// dynamically accessed from memory
