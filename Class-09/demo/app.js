"use strict";

let allDrinks = [];
let sectionEl = document.getElementById("sec")
let form = document.getElementById("form");
let tableEL = document.getElementById("table");
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
Drink.prototype.renderTable= function(){

  let trEL = document.createElement('tr');
  tableEL.appendChild(trEL);

  let tdEl = document.createElement('td');
  tdEl.textContent=this.name;
  trEL.appendChild(tdEl);

  let tdEl2 = document.createElement('td');
  tdEl2.textContent=this.price;
  trEL.appendChild(tdEl2);



    
}

  
const mocha = new Drink("Mocha",["coffee", "milk", "sugar"],"../assets/mocha.png",true,false,5);
const latte = new Drink( "Latte",["coffee","milk","sugar","espresso"],"../assets/latte.png",true,true,1);
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
  saveData(allDrinks);


}




function renderAll(){
  for (let i = 0;i< allDrinks.length; i++){
    allDrinks[i].render();
    allDrinks[i].renderTable()
    }
}
// renderAll();


function saveData(data){
  let stringArr= JSON.stringify(data);
  localStorage.setItem('drinks', stringArr);
}
console.log("before saving in LS", allDrinks)

function getData(){
  let retrievedArr = localStorage.getItem('drinks');
  // console.log(retrievedArr) //string
  let objArray = JSON.parse(retrievedArr);
  console.log("after getting from LS ",objArray) // array of objects

  if(objArray != null){

    for (let i = 0; i < objArray.length; i++) {
      new Drink(objArray[i].name, objArray[i].ingredients, objArray[i].image, objArray[i].cold, objArray[i].hot, objArray[i].price)
      
    }
  }

  renderAll();

  
}



getData();


// americano.render();
// mocha.render();
// latte.render();

//1. save allDrinks array in LS
//2. get allDrinks Array from LS
//3. call the render method for the objects inside allDrinks Array 