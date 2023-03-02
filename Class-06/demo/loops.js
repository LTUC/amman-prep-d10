'use strict';

//loops
var seasons = ["spring", "summer", "autumn", "winter"];
var userAnswer= prompt("what is your favorite season?")


// var answer = 0;
for (var i = 0; i < seasons.length; i++) {
    if (userAnswer == seasons[i]) {
        console.log("I found it ");
        // break
    } else {
        // continue
        // console.log("Not found");
    }
    // console.log(seasons[i]);
}

