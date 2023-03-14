'use strict';
//Regular Expression :  pattern to search / replace / adjust a text you have 


let str = "hello everyone it's Rania from ASAC, hello, Hello";
let regex = /Hello/ig;
//check if the string contains "Hello" ?
//.test()
//i flag : case insensitive 
// let result = regex.test(str);

//.match ()
let result = str.match(regex);
// g flag : search for matches in whole string
// or operator
let regex2 = /Hello|Rania/ig;
let result2 = str.match(regex2);

console.log(result2);

let str2= "I like JS and I code 4 hours a day!";
// let regex3= /\d/; \\digits
// let regex3= /[0-5]/;
// let regex3= /\w/; //words
let regex3= /\W/g; //special char 
console.log(str2.match(regex3));

console.log(str2.replace(regex3,"-")); //to replace patterns he found with any text I want 


console.log(regex3.test(str2))


// let regex4=/^I/;//
let regex4=/day!$/;

console.log(regex4.test(str2))