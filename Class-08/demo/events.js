'use strict';


let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");


//1.where  is the event 
//2. what is the event //click
//3. what to do //alerting 

btn1.addEventListener("click", clickHandler)

function clickHandler() {
    alert("welcome to ASAC")
}

//sec ex"
btn2.addEventListener('mouseover', mouseOverHandler);

function mouseOverHandler() {
    btn2.style.backgroundColor = "blue";
}

//back to gray
btn2.addEventListener("mouseout", mouseOutHandler);

function mouseOutHandler() {
    btn2.style.backgroundColor = "#EFEFEF";
}






