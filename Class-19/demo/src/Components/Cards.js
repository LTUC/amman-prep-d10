
import SingleCard from './SingleCard'
export default function Cards(props){

    return(
        <>
        {
            props.recipes.map(recipe =>{
                return(
                    <SingleCard recipe={recipe}  commentHandler={props.commentHandler}/>
                )
            })
        }
        </>
    )

}