// var, let and const

// var
var name = "John Doe";
console.log(name);
name = "Steven Smith";
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = "Hello";
console.log(greeting);

// variables can contain: letters, numbers, underscores (_) and dollar signs ($)
// they cannot start with a number though

// multi word vars
var firstName; // camel case
var first_name; // snake case
var FirstName; // pascal case
var firstname; // lowercase (not recommended)

// let
let name;
name = "John Doe";
console.log(name);
name = "Steven Smith";
console.log(name);

// const
// const name = 'John';
// console.log(name);
// cannot reassign
// name = 'sara' // throws error
// have to assign a value

const person = {
  name: "John",
  age: 30
};

person.name = "Sara"; // can still reassign value of keys; just not object set to constant variable
person.age = 32;

// console.log(person)

const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // this is perfectly fine
// constant variables can be mutated
// they just can't be re-assigned a new value

console.log(numbers);

// use const type unless you need to explicitly
// change the value of a variable in a conditional
