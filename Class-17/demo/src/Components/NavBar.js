import {Link} from 'react-router-dom';
const NavBar = ()=>{

    return(
        <>
        <nav>
            <Link to="/">home</Link>
        </nav>

        <nav>
            <Link to="/about">about</Link>
        </nav>
        
        <nav>
         <Link to="/contact">contact</Link>
        </nav>
        </>

    )
}

export default NavBar;