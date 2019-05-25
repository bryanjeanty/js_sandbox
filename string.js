const firstName = 'William';
const lastName = 'Johnson';
const age = 23;
const str = 'Hello there! Name\'s Bryan';
const tags = 'web design, web development, programming';

let val;

// concatenation
val = firstName + ' ' + lastName; // William Johnson

// Append
val = 'Bryan ';
val = 'Jay';

val = 'Hello, my name is ' + firstName + 'and I am ' + age;

// Escaping
val = 'That\'s awesome. I can\'t wait';

// length
val = firstName.length; // number of characters in string

// concat method
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// indexOf method
val = firstName.indexOf('l'); // 2
val = firstName.lastIndexOf('l'); // 3

// charAt method
val = firstName.charAt(2); // 'l'
// get last char
val = firstName.charAt(firstName.length - 1); // 'm'

// substring method
val = firstName.substring(0, 4); // 'will'

// slice method (mostly used with arrays) - similar to substring
val = firstName.slice(0, 4); // 'will'
val = firstName.slice(-3); // 'iam'

// split method
val = str.split(' ');
val = tags.split(', ');

// replace method
val = str.replace('Bryan', 'Joe'); // 'Hello there! Name\'s Joe'

// includes method
val = str.includes('Hello'); // true
val = str.includes('foo'); // false
