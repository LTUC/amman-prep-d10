import FirstComponent from "./Components/FirstComponent";
import Welcome from "./Components/Welcome";
import Memes from "./Components/Memes";
const memesData = require("./data/data.json")
function App() {


  const name = "Aseel";
  const favColor = "red"
  const name2 = "Muath";
  const color2 = "green";
  return (
    <>
      <h1>Hello World</h1>
      <FirstComponent/>
      <Welcome  studentName ={name}  favColor={favColor} />
      <Welcome  studentName ={name2}  favColor={color2} />

      {
        memesData.map(element=>{
          return(
            <Memes  meme_name={element.name} image_url={element.image}/>
          )
        })
      }
    </>
  );
}

export default App;
