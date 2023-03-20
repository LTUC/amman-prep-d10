'use strict';   
const express= require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();
app.use(cors());
const PORT = process.env.PORT;
const apikey=process.env.API_KEY
//routes
app.get('/', homeHandler);
app.get("/recipes", recipesHandler);
app.get('/searchRecipe', searchRecipeHandler);
app.use("*", handleNtFoundError)// always make it the last route 

//function
function homeHandler(req, res){
    res.send("Hello World")
}

function handleNtFoundError(req, res){
    res.status(404).send("not found")
}
function recipesHandler(req, res){
    //axios.get(url).then().catch()
    let url = `https://api.spoonacular.com/recipes/random?apiKey=${apikey}`;
    axios.get(url)
    .then((result)=>{
        console.log(result.data.recipes);

        let dataRecipes = result.data.recipes.map((recipe)=>{
            return new Recipe(recipe.title, recipe.readyInMinutes,recipe.image)
        })
        // res.json(result.data.recipes);
        res.json(dataRecipes);
    })
    .catch((err)=>{
        console.log(err);
    })

} 
function searchRecipeHandler(req,res){
    let recipeName = req.query.name // name it as you want 
    console.log(recipeName)
    let url=`https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&apiKey=${apikey}`
    axios.get(url)
    .then((result)=>{
        console.log(result.data.results);
        let response= result.data.results;
        res.json(response);
    })
    .catch((err)=>{
        console.log(err)
    })
    // res.send("request accepted ")
    
}                           
//constructor
function Recipe(title,time,image){
    this.title=title;
    this.time=time;
    this.image=image;
  

}

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})


