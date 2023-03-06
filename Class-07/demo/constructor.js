'use strict';

function Person(firstName, favFood, loveCoffee, likeCats, likeDogs) {
  this.firstName = firstName;
  this.favFood = favFood;
  this.loveCoffee = loveCoffee;
  this.likeCats = likeCats;
  this.likeDogs = likeDogs;
  
}
//prototype
Person.prototype.driving = function () {
  console.log(this);
  console.log(`${this.firstName} doesn't drive any car `);
};

Person.prototype.greeting = function () {
  console.log(
    `welcome all, my name is ${this.firstName} & I like ${this.favFood}`
  );
};

let Mutaz = new Person("Mutaz", "Mansaf", true, false, false);
let Eman = new Person("Eman", "Pizza", true, false, false);
console.log(Mutaz);

Mutaz.driving();
Eman.greeting();