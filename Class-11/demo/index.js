'use strict';
//1. require express framework 

const express = require('express')
const recipeData = require('./data.json')
const app = express();

const port = 3002

//app.METHOD(PATH, HANDLER)

//http://localhost:3002/myFirstRout
app.get('/myFirstRout', firstRoutHandler);

function firstRoutHandler(req,res){
    res.send("Welcome to my first Rout")

}

app.get('/',homePageHandler);

function homePageHandler(req,res){
    res.send("Welcome to our website");
}

app.get('/Recipes', recipesHandler) //route 

function recipesHandler(req,res){
    let result=[];
    //looping (forEach)
    recipeData.data.forEach(element=>{

        let newRecipe= new Recipe(element.title,element.summary, element.image);
        result.push(newRecipe);
    })
    // console.log(result);
     

    res.json(result);
    // console.log(recipeData);
}

//constructor 

function Recipe(title,description,image){
    this.title=title;
    this.description=description;
    this.image=image

}



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
