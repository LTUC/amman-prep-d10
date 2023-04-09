import {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default function FavRecipes(){

    const [favRecipes,setFavRecipes ] = useState([]);


    async function getFavRecipes(){
        let url =`${process.env.REACT_APP_SERVER_URL}/favRecipes`;

        let response = await fetch(url,{
            method: 'GET',
        })

        let recivedData = await response.json();
        setFavRecipes(recivedData)

       
    }

    async function handleDelete(id){
        let url =`${process.env.REACT_APP_SERVER_URL}/deleteFavRecipe/${id}`;

        let response = await fetch(url,{

            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
        })
  

        if(response.status === 204){
            getFavRecipes();
            // alert("successfully deleted !!")

        }

        


    }




    useEffect(()=>{
        getFavRecipes();

        // console.log(favRecipes)

    },[])



    return(
        <>
        <h2> this is Fav recipes Page</h2>

        {
            favRecipes && favRecipes.map(recipe=>{
                return(
                    <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={recipe.sourceurl} />
                    <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      <Card.Text>{recipe.summary.substring(0,100)}</Card.Text>
                      <Button variant="primary" onClick={()=>handleDelete(recipe.id)}> Delete </Button>
                    </Card.Body>
                  </Card>
                )


            })
        }
        </>
    )
}