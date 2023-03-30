function FirstComponent(){
    const url ="https://imgs.search.brave.com/g2V8I4PijVGw0qgXtVznlU3CKyQjucB_4ceUemnQfdE/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC52cDllSDlv/SzRyOVQxc1dxa3Vk/bTJRSGFFSyZwaWQ9/QXBp";
    return(
        <>
        <p style = {{"color":"red"}}> this is my first Component !!</p>
        <img src ={url} alt="react image"/>
        </>
    )
}

export default FirstComponent;