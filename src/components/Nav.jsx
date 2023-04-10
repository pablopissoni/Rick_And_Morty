import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";


const Nav = ({ onSearch , logOut}) => {

  const location = useLocation();                    //? Obtengo la ubicacion y guardo en locacion
  if (location.pathname === '/') return null         //? si la direccion es "/" este componente no retorna nada y no se muestra

  
  const numeroAleatorio = () => { //? FUNCION QUE SE PODRIA CREAR EN OTRO COMPONENTE "Random" SEGUN EL "EXTRA"
    let numAleatorio = Math.floor(Math.random() * 826 + 1)
    return numAleatorio
  }
  

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <button onClick={() => {onSearch(numeroAleatorio())}} >Random</button>
      <Link to="/home" ><button>Home</button></Link>
      <Link to="/about"><button>About</button></Link>
      <Link to="/" ><button onClick={logOut}>Log out</button></Link>
    </div>
  );
};

export default Nav;
