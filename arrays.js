// create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(43, 56, 33, 23, 44, 36, 5);
const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

// length method
val = numbers.length; // 7

// check if is array
val = Array.isArray(numbers); // true

// get single value (index)
val = numbers[3]; // 23 [0 based indexing]

// insert into array
numbers[2] = 100; // [43, 56, 100, 23, 44, 36, 5]

// find index of value
val = numbers.indexOf(36); // 5

// mutating arrays
// add to end
numbers.push(250); // [43, 56, 100, 23, 44, 36, 5, 250]
// add to front
numbers.unshift(120); // [120, 43, 56, 100, 23, 44, 36, 5, 250]
// remove from end
numbers.pop(); // [120, 43, 56, 100, 23, 44, 36, 5]
// remove from front
numbers.unshift(); // [43, 56, 100, 23, 44, 36, 5]
/*
* splice method
* @desc :: like substring, but also with arrays
* @param start :: starting position of splice
* @param end :: ending position of splice
*/
numbers.splice(1,3); // [43, 44, 36, 5]
// reverse array
numbers.reverse(); // [5, 36, 44, 43]
// concatenate array
val = numbers.concat(numbers2);
// sort arrays
val = fruit.sort(); // ['Apple', 'Banana', 'Orange', 'Pear']
val = numbers.sort(); // [36, 43, 44, 5]
/*
* this isn't correct. only sorting by first digit
* sort is a higher-level function
* in order to use it correctly, we need to pass in a callback
*/
// sort method with compare function
val = numbers.sort(function(x, y) {
  return x - y;
})); // [5, 36, 43, 44]
// reverse sort method with compare function
val = numbers.sort(function(x, y) {
  return y - x;
})); // [44, 43, 36, 5]

// find
// this function will work as anonymous function
function under50(num) {
  return num < 50;
}

val = numbers.find(under50); // returns first number in array less than 50
