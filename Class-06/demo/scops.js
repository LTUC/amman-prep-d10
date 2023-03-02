'use strict ';

let x = 5;
if (5 > 4) {
    // var test = "hello"
    // let test = "hello";
    const test = "hello";
    console.log("inside block scope",x);


    // console.log("inside block scope",test)
    
}

// console.log("outside block scope", test);

function myFunction() {
//   var test = "hello";
    // let test = "hello";
    const test = "hello";
    if (true) {
        console.log("11111",test)
    }
    console.log("inside function scope", x);

    
  console.log("inside block scope",test)
}
myFunction()
// console.log("outside block scope", test);



// const vs. let 

const myFirstName = "Rania";
// myFirstName = "Lina";

// console.log(myFirstName);
let myGrade = 90
myGrade = 80;
console.log(myGrade);




//ternary if 
let c = 5
let y = 4
if (c>y) {
    console.log("HI");
    console.log("BYE");
} else {
    console.log(c);
    console.log(y);
    
}

c > y ? (console.log("HI"), console.log("BYE")) : (console.log(c),
    console.log(y));
