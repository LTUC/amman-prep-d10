function Memes(props){
    console.log(props)
    return (
        <>
        <h2>{props.meme_name}</h2>
        <img src={props.image_url}   alt={props.meme_name} />
        </>
    )
}

export default Memes;