// Global scope
var a = 1;
let b = 2;
const c = 3;

/*
// function test
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log(`Function scope: ${a}, ${b}, ${c}`); // 'Function scope: 4, 5, 6'
}

test();
// global scope test for function-level scope
console.log(`Global scope: ${a}, ${b}, ${c}`); // 'Global scope: 1, 2, 3'
*/

if (true) {
  // block scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log(`Block scope: ${a}, ${b}, ${c}`); // 'Block scope: 4, 5, 6'
}
// global scope test for block-level scope
console.log(`Global scope: ${a}, ${b}, ${c}`); // 'Global scope: 4, 2, 3'
// var declared variables do not have block-level scoping
// therefore a global variable will always take precedence
// even if variable is re-declared in block

for(var a = 0; a < 10; a++) {
  console.log(a);
};

console.log(`Global scope: ${a}, ${b}, ${c}`); // 'Global scope: 10, 2, 3'
// not that using var will mutate global a variable
