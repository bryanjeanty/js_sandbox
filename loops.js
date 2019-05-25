// For loop
console.time();
for(let index = 0; index < 10; index++) {
  if (index === 2) {
    console.log(`${index} is my fav num`);
    continue;
  }

  if (index === 5) {
    console.log(`STOP at index: ${index}`);
    break;
  }

  console.log(index);
}
console.timeEnd();
console.log('');

// While loop
let index = 0;

console.time()
while (index < 10) {
  console.log(index);
  index++;
}
console.timeEnd();
console.log('');

// Do While loop
// always runs atleast once
index = 0;

console.time();
do {
  console.log(index);
  index++;
} while (index < 10);
console.timeEnd();
console.log('');

// looping over arrays
// not recommended to perform imperatively
// declarative is preferred (use array methods)

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// regular for loop
console.log('-----Imperative-----');
console.time();
for (let index = 0; index < cars.length; index++) {
  console.log(cars[index]);
};
console.timeEnd();
console.log('');

// for each method (higher-level function)
console.log('-----declarative-----');
console.time();
cars.forEach(car => console.log(car));
console.timeEnd();
console.log('');

// map method (higher-level function)
const users = [
  {id: 1, name: 'john'},
  {id: 2, name: 'sara'},
  {id: 3, name: 'karen'}
];

const ids = users.map(user => user.id);
console.log(ids);
console.log('');

// for each method (with index parameter)
cars.forEach((value, index) => console.log(`${index}: ${value}`));


// for in loops
const user = {
  firstName: 'john',
  lastName: 'doe',
  age: 40
};

for(let key in user) {
  console.log(`${key}: ${user[key]}`);
}
