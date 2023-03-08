'use strict';

//DOM manipulation 
let liEl = document.getElementsByTagName('li');
console.log(liEl[2])
let h1El = document.getElementById("heading");
// console.log(h1El);
let body = document.getElementsByTagName("body")
// console.log(body[0]);
let sectionEl = document.getElementById("sec");
console.log(sectionEl);
//create new element 
//1.create the element
let h3El = document.createElement('h3');
//2. give it a value 
h3El.textContent="welcome to ASAC"

//3. where should I add it
body[0].appendChild(h3El);



// add par

let parEl = document.createElement('p');
parEl.textContent = "it is sunny day in ASAC";
sectionEl.appendChild(parEl);

parEl.className = "parClass";
h1El.id="heading"
h1El.textContent = "DOM man";
h1El.textContent += "Ahmad";

h1El.style.color = "red";



//create image 

let imgEl = document.createElement("img");
imgEl.src =
    "https://tse1.mm.bing.net/th?id=OIP.9QOTMe0ijJE7uRxuvmQN9wHaHa&pid=Api&rs=1&c=1&qlt=95&w=123";
  
sectionEl.appendChild(imgEl);    
imgEl.alt = "coffee icon";
