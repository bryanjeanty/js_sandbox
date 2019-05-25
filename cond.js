/*
* if (something) {
*   do something
* } else {
*   do something else
* }
*/

const id = 100;

// equal to value
if (id == 100) {
  console.log('CORRECT'); // will output
} else {
  console.log('INCORRECT');
}

// not equal to value
if (id != 101) {
  console.log('CORRECT'); // will output
} else {
  console.log('INCORRECT');
}

// equal to value & type
if (id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT'); // will output
}

// equal to value & type
if (id !== 100) {
  console.log('CORRECT'); // will output
} else {
  console.log('INCORRECT');
}

let myId;

// test undefined values
if (typeof myId !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// if else
const color = 'yellow';

if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue'); // will output
}

// logical operators
const name = 'Steve';
const age = 23;

// AND (&&)
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age < 20) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR (||)
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// ternary operator
console.log(id === 100 ? "id is 100" : "id is not 100");

// without braces
if (id > 100)
  console.log('power level over 100');
else
  console.log('power level in normal range');
