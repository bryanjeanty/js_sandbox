// Function declarations

function greet(name = 'george', surname = 'smith') {
  return `Hello ${name} ${surname}`;
}

// console.log(greet());

// function expressions
const square = function(x = 1) {
  return x * x;
};

// console.log(square());

// immediately invokable function expression (IIFEs)
// declare an anonymous function in-between parenthesis
(function(name){
  console.log('Hello ' + name);
})('Bryan');

// property methods

const todo = {
  add: function() {
    console.log('Add todo...');
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
}

// define property method outside of object literal
todo.remove = function() {
  console.log('Remove todo...');
}

todo.add();
todo.edit(22);
todo.remove();
