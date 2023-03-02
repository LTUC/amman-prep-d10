'use strict';
console.log(" I am Array");

//Arrays
var days = ["Sun", "Mon", "Tues", "Wed", "Thursd"];
console.log(days);

var secElement = days[4];
console.log(secElement);
console.log("my favorite day is " + days[3]); // string concatenation 
console.log(`my favorite days is ${days[3]} because its vacation`); // interpolation 

// Array methods

days[0] = "Friday";
days[5] = "Saturday";
days[10] = "today";
console.log(days.length - 1) //reach the last element in an array 

//1. push : adding to the end of the array
var topics = ["HTML"];
topics.push("JS");
console.log(topics) 

//2. unshift :adding to the beginning of the array

topics.unshift("CSS");
console.log(topics); 

//3. shift : delete from the begining of the array
topics.shift();
console.log(topics)
//4. pop : delete from the end of the array
topics.pop();
console.log(topics)
 
//toString : join all the elements in the array to one string 
var myDays = ["Sun", "Mon", "Tues", "Wed", "Thursd"];
var myString = myDays.toString();
console.log(myString)//
console.log(typeof myString);

