import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

const Nav = ({ onSearch }) => {

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
    </div>
  );
};

export default Nav;
