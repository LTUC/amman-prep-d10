'use strict';
// functions 


// function declaration
function square(number) {
    return number * number;
}

// call the function
var three = square(3);
var ten = square(10);
console.log(three, ten);

function sayHello() {
    console.log("Hello world");
}

sayHello();


// arrow functions 
var square= (number)=> {
  return number * number;
}

console.log(square(3));

var sayHello = () => {
    console.log("Hello world");
}


sayHello();
// refactoring 
var sayHello = () => console.log("Hello world");
