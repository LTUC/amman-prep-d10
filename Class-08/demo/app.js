"use strict";

const allDrinks = [];
let sectionEl = document.getElementById("sec")
let form = document.getElementById("form");
//constructor
function Drink(name, ingredients, image, cold, hot, price) {
  this.name = name;
  this.ingredients = ingredients;
  this.image = image;
  this.isCold = cold;
  this.isHot = hot;
  this.price = price;
  allDrinks.push(this);
}
//methods
Drink.prototype.render = function () {
  //  document.write(`<h3>Drink Name : ${this.name}</h3>`)
  let h3El = document.createElement('h3');
  h3El.textContent = `Drink Name : ${this.name}`;
  sectionEl.appendChild(h3El)

  //add img 
  let imgEl = document.createElement('img');
  imgEl.src = this.image
  sectionEl.appendChild(imgEl);

  let ulEl = document.createElement('ul');
  sectionEl.appendChild(ulEl);
  for (let i = 0; i < this.ingredients.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = this.ingredients[i];
    ulEl.appendChild(liEl);
  }
    

     
}    
  
const mocha = new Drink("Mocha",["coffee", "milk", "sugar"],"../assets/mocha.png",true,false,5);
const latte = new Drink( "Latte",["coffee","milk","sugar","espresso"],"../assets/latte.png",true,1);
const americano = new Drink(
  "americano",
  ["americano", "milk", "sugar"],
  "../assets/americano.png",
  true,
  false,
  2
);

// allDrinks.push(americano, latte,);
// console.log(allDrinks);


form.addEventListener("submit",submitHandler);

function submitHandler(event) {
  event.preventDefault();
  console.log(event);
  // alert("form successfully submitted !")
  console.log(event.target.Dname.value);
  let drinkName = event.target.Dname.value;
  let img = event.target.img.value;
  let ingredients = event.target.ingredients.value
  //checkbox
  let isCold = event.target.cold.checked;
  let isHot = event.target.hot.checked;
  // console.log(drinkName, img, ingredients, isCold, isHot);
  console.log(typeof ingredients);

  //split 
  let ingredientsArr = ingredients.split(",");
  // console.log(ingredientsArr);
  let newDrink = new Drink(drinkName, ingredientsArr, img, isCold, isHot);

  newDrink.render();


}







americano.render();
mocha.render();
latte.render();
