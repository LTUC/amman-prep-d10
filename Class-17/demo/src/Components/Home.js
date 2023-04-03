import  { useState } from 'react';

import Button from './Button';
const Home = ()=>{
    const [message, setMessage] = useState("Stranger")

    function handleClick(){
        alert("Just like Magic !")
    }
    function submitHandler(event){
        event.preventDefault();
        alert("form submitted successfully")
    }

    function welcome(login){
        console.log("from Home comp",login);
        login? setMessage("Back"): setMessage("Stranger!!")
    }



    return(
        <>
            <h2 style={{color:"blue"}}> This is Home Page</h2>
            {/* <button onClick={handleClick}>
                click me
            </button>

            <form onSubmit={submitHandler}>
                <button type="submit">submit</button>
            </form> */}

            <p> welcome {message}</p>
            <Button  welcome={welcome}/>
        </>
    )
}

export default Home;