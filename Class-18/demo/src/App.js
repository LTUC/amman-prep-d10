
import Home from './Components/Home'
import FavRecipes from './Components/FavRecipes';
import NavBar from './Components/NavBar';
import {Routes,Route} from  'react-router-dom';
function App() {
  return (
    <>
     <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favRecipes' element={<FavRecipes/>}/>

      </Routes>
    </>
  );
}

export default App;
