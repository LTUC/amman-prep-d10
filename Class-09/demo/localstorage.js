'use strict';

console.log(localStorage);

// console.log(typeof localStorage);

//1. clear()  to clear all data from localStorage
localStorage.clear();

//2.setItem() : to save data in localStorage

localStorage.setItem('name','Bayan');
localStorage.setItem('Age','24');

//3. getItem() : to get data from localStorage

let stdName= localStorage.getItem('name');
console.log(stdName);

//4. removeItem() : to remove item from localStorage
localStorage.removeItem('name');

