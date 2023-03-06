// problem domain: ASAC coffee house is a new cafe so they are updating their menu 
//  There are alot of drinks that they can add to the menu and  it's too time-consuming to hand-code them each time  
// so They need a better and faster way.

// Each drink should has:
// - name
// - ingredients
// - an image
// - cold
// - hot 
// - price 

// TODO: dynamically generate drink objects using form data

'use strict';

const allDrinks = [];
function Drink(name,ingredients,image,cold,hot,price) {
    this.name =name;
    this.ingredients =ingredients;
    this.image =image;
    this.isCold =cold;
    this.isHot =hot;
    this.price = price;
    allDrinks.push(this)
}
Drink.prototype.render = function () {
    // console.log(this.name)
    document.write(`<h1>the Drink name is ${this.name}</h1>`);
}
let americano = new Drink("americano", ["water", "coffee", "ice"], "./assets/americano.png", true, true, 2);
let latte = new Drink(
  "latte",
  ["water", "coffee", "Milk"],
  "./assets/americano.png",
  false,
  true,
  1
);
let espresso = new Drink(
  "espresso",
  ["water", "coffee", "ice"],
  "./assets/espresso.png",
  true,
  true,
  2
);
let Mocha = new Drink(
  "Mocha",
  ["water", "coffee", "ice"],
  "./assets/mocha.png",
  true,
  true,
  2
);


// allDrinks.push(americano, latte,);
// console.log(allDrinks);

americano.render();
latte.render();
