import  { useState } from 'react';
const Button =(props)=>{
    const [login , setLogIn] = useState(false);
    const [mode, setMode] = useState("red");
    const [likes, setLikes] = useState(0);

    console.log("is user logged in ?",login)

    function loginHandler(){
        // alert ("you are logged in");
    
        setLogIn(!login) // inverter
        props.welcome(login);
    }
    function modeHandler(){

        if (mode==="red"){

            setMode("green")
        }else{
            setMode("red")
        }

    }

    function likesHandler(){
        setLikes(likes+1)
    }
    return(
        <>
        {/* ternary-if */}
        <button style = {{backgroundColor:mode}}  onClick={loginHandler}>{login? "Log out" : "Log in"}</button>

         {/* conditional operater && */}
        {/* {
            login && <button onClick={loginHandler}>Log out</button>
        }
        {
            !login && <button onClick={loginHandler}>Log in</button>
        } */}


        <button onClick={modeHandler}>change mode</button>
        <div>
            <p> likes number is : {likes}</p>
            <button onClick={likesHandler}>like</button>
        </div>
        </>

    )
}

export default Button;