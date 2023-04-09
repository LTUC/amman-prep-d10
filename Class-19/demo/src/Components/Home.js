import Button from 'react-bootstrap/Button';
import{ useState, useEffect } from 'react';
import Cards from './Cards';

export default function Home(){
    const [recipes,setRecipes]=useState([])

    async function getRecipes(){
        const url=process.env.REACT_APP_SERVER_URL;
        // console.log(11111,url);

        const response = await fetch(`${url}/recipes`);
        console.log(2222,response);

        const recipesData = await response.json();
        console.log(3333,recipesData);
       
        setRecipes(recipesData);
        console.log(44444,recipes)

    }

    function commentHandler(newRecipe , id){
        recipes.map(recipe=>{
            if(recipe.id === id){
                
                recipe.comment = newRecipe.userComment
                console.log(11111,recipe)
                return recipe;
            }else{
                return recipe
            }
        })
    }

  

    useEffect(()=>{
        getRecipes();
    },[])  

    return(
        <>
        <h2> this is Home Page</h2>
       
        <button>normal btn</button>
        <Button  variant="success">bootStrap btn</Button>

        <Cards  recipes={recipes}  commentHandler={commentHandler}/>
        </>
    )
}