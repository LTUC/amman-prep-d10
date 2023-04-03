import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <h1> Hello World </h1>
     <Routes>

       <Route path="/"  element={<Home/>}></Route>
       <Route path="/about"  element={<About/>}></Route>
       <Route path="/contact"  element={<Contact/>}></Route>

   
      

      </Routes>
    </>
  );
}

export default App;
