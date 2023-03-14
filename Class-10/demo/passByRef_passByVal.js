'use strict';

let x=10;
let y =5;

console.log("before",x,y);

x=y
console.log("After",x,y);

x=20
// console.log("second change",x,y);

//pass by referance 

let person ={
    name:"Eman",
    age:25

}
let secPerson = person 
// console.log(person)
// console.log(secPerson)

secPerson.name="Ahmad"
console.log(person)
console.log(secPerson);

//for converting the behaviour for arrays (pass by ref to pass by value using Spread operator) ;
const parts = ["shoulders", "knees"];
const lyrics = [...parts,"Hussam"];
console.log(parts)

console.log(lyrics)
