

hoisting();

function hoisting() {
    console.log("call me whenever you need me ")
}

hoisting();

firstName="Rania"
var firstName;
console.log(firstName); //will work

favColor= "Rania";
let favColor;
console.log(favColor);// won't work 