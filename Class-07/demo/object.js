'use strict';

let person = {
    firstName: "Mutaz",
    favFood: "Mansaf",
    loveCoffee: true,
    likeCats: false,
    likeDogs: false,
    driving: function () {
        console.log(this)
        // console.log("Mutaz drives Hundai")
    },
    greeting: function () {
        console.log(`welcome all, my name is ${this.firstName} & I like ${this.favFood}`);
    }
}


let person2 = {
  firstName: "Eman",
  favFood: "Pizza",
  loveCoffee: true,
  likeCats: false,
  likeDogs: false,
  driving: function () {
    console.log(this);
    console.log(`${this.firstName} doesn't drive any car `);
  },
  greeting: function () {
    console.log(
      `welcome all, my name is ${this.firstName} & I like ${this.favFood}`
    );
  },
};
console.log(person)
// const arr = ["a", "b", "c"];
// console.log(arr);


console.log(person.firstName); // dot notation
console.log(person["loveCoffee"]); // bracket notation

person.age = 25;
console.log(person)

person.driving();
person.greeting();

//"This"


//hoisting
//objects
//this
//constructor
//prototype
//DOM (document.write)


