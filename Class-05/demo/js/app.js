
console.log("Hello World");
// variables (declare, assign a value)
// variable declaration : var, let, const

var password;
password = 52225;

var userName = "Abdullah";

//popup messages :
// //1. alert
// alert("Welcome to python course !!")
// //2. confirm
// // confirm returns true or false valuse
// var userAnswer;
// userAnswer = confirm("Are you excited to start our python course ?");
// console.log(userAnswer);
//3. prompt 
var userName = prompt("what is your name ?");
console.log(userName);


// conditions 
// if (condition) {
//     s1
//     s2
//     s3
// } else {
//     s4
//     s5
//     s6
// }

// if (userName == 'Rania') {
//     console.log("Welcome Rania")
// } else {
//     console.log("I dont know you ")
// }




var userAge = prompt("what is your Age");
// if (userAge > 35) { //42
//     alert('it is never too late to code ');

// } else if (userAge > 20) {//25
//     alert("it is the right time  to code ");
    
// } else {//19
//     alert("too young !")
// }

// ternary if 
userName == "Rania" ? console.log("Welcome Rania") : console.log("I dont know you ");

userAge > 35? alert("it is never too late to code "): userAge > 20? alert("it is the right time  to code "): alert("too young !");



