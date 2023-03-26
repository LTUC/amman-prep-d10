'use strict';
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser')
const { Client } = require('pg')
//postgres://username:password@localhost:5432/databasename
let url = `postgres://postgres:12345@localhost:5432/demo14`;
const client = new Client(url)




const PORT = 3001;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());


//routes
app.get('/', homeHandler);
app.post('/addRecipe',addRecipeHandler);
app.get('/getAllRecipes',getAllRecipesHandler);
app.put('/updateRecipe/:Name',handleUpdate)//params
app.delete('/deleteRecipe/:recipeName', handleDelete)
app.use(errorHandler);

//functions
function  homeHandler(req,res){
    res.send("welcome to home page ");
}

function addRecipeHandler(req,res){
    console.log(req.body);
    // let title = req.body.title;
    // let time  = req.body.time;
    // let image = req.body.image;
    //or 
    let {title,time,image} = req.body; // destructuring 
    // client.query(sql,values)
    let sql = `INSERT INTO recipes (title, time, image)
    VALUES ($1,$2,$3) RETURNING *; `
    let values = [title,time,image]
    client.query(sql,values).then((result)=>{
        console.log(result.rows)
        // res.status(201).send("data successfully saved in db to server")
        res.status(201).json(result.rows)

    }

    ).catch((err)=>{
        errorHandler(err,req,res);
    })

}

function getAllRecipesHandler(req,res) {
    let sql =`SELECT * FROM recipes;`; //read all data from database table
    client.query(sql).then((result)=>{
        console.log(result);
        res.json(result.rows)
    }).catch((err)=>{
        errorHandler(err,req,res)
    })
}
function handleUpdate(req,res){
    // console.log(11111111,req.params);
    let recipeName = req.params.Name // params
    let {title,time,image} = req.body;
    let sql=`UPDATE recipes SET title = $1, time = $2, image=$3 
    WHERE title = $4 RETURNING *;`;
    let values = [title,time,image,recipeName];
    client.query(sql,values).then(result=>{
        console.log(result.rows);
        res.send(result.rows)
    }).catch()

}

function handleDelete(req,res){
    let {recipeName} = req.params; //destructuring
    //or
    //let recipeName = req.params.recipeName
    let sql=`DELETE FROM recipes WHERE title = $1;` ;
    let value = [recipeName];
    client.query(sql,value).then(result=>{
        res.status(204).send("deleted");
    }).catch()


}








function errorHandler(error,req,res){
   
    res.status(500).send(error)
}

client.connect().then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening on port${PORT}`);
    })

}).catch()


