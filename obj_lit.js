const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function() {
    return 2019 - this.age;
  }
};

let val;

val = person;

// get specific property
val = person.firstName; // 'Steve'
val = person['lastName']; // 'Smith'
val = person.age; // 30
val = person.hobbies[1]; // 'sports'
val = person.address.state // 'FL'
val = person.address.city // 'Miami'

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
