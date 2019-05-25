let val;

// convert to string
// number to string
val = 5;

// output
console.log(val); // 5
console.log(typeof val); // number
console.log(val.length); // undefined

// convert to string
val = String(val);
console.log(val); // '5'
console.log(typeof val); // string
console.log(val.length); // 1

// convert expression to string
val = String(4 + 4);
console.log(val); // '8'
console.log(typeof val); // string
console.log(val.length); // 1

// convert a boolean to string
val = String(true);
console.log(val); // 'true'
console.log(typeof val); // string
console.log(val.length); // 4

// convert a date to a string
val = String(new Date());
console.log(val); // ** varies **
console.log(typeof val); // string
console.log(val.length); // ** varies **

// convert array to a string
val = String([1, 2, 3, 4]);
console.log(val); // '[1,2,3,4]'
console.log(typeof val); // string
console.log(val.length); // 7

// toString() method also works
val = (5).toString();
val = true.toString();

// convert to number
// number string to number
val = Number("5");
console.log(val); // 5
console.log(typeof val); // number
console.log(val.toFixed(1)); // 5.0

// true boolean to number
val = Number(true);
console.log(val); // 1
console.log(typeof val); // number
console.log(val.toFixed(1)); // 1.0

// false boolean to number
val = Number(false);
val = Number(null);
console.log(val); // 0
console.log(typeof val); // number
console.log(val.toFixed(1)); // 0.0

// word string to number
val = Number("Hello");
console.log(val); // NaN
console.log(typeof val); // number
console.log(val.toFixed(1)); // NaN

// array to number
val = Number([1, 2, 3]);
console.log(val); // NaN
console.log(typeof val); // number
console.log(val.toFixed(1)); // NaN

// parseInt also works
val = parseInt("100");
console.log(val); // 100
console.log(typeof val); // number
console.log(val.toFixed(1)); // 100.0

// only parses the integer (no decimals)
val = parseInt("100.30");
console.log(val); // 100
console.log(typeof val); // number
console.log(val.toFixed(1)); // 100.0

// parseFloat for decimals
val = parseFloat("100.30");
console.log(val); // 100.3
console.log(typeof val); // number
console.log(val.toFixed(2)); // 100.30

// type coercion
// JS takes care of type conversion, in order
// to avoid errors
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum); // 56
console.log(typeof sum); // string
