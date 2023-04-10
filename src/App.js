import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, useNavigate } from 'react-router-dom';
import { Routes } from "react-router-dom";
import About from "./components/About";
import { Detail } from "./components/Detail";
import Form from "./components/Form";

function App() {
  //* HOOKs
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  //* Falso usuario y clave
  const email = "pablopissoni@gmail.com";
  const password = "admin123";

  
  
  const URL = 'https://be-a-rym.up.railway.app/api/character';
  const API_KEY = "f7f034756775.3f44ea1317c2007ec4dc"
  
  
  function onSearch(id) { //? BUSCADOR POR ID en caso de encontar el ID de la carta
    axios(`${URL}/${id}?key=${API_KEY}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
      );
    }
    
    
    function onClose(id) { //? FUNCION QUE ELIMINA LA CARTA SELECCIONADA FILTRANDO LAS DEMAS Y MANTENIENDOLAS EN EL ARRAY o Dom
      setCharacters(characters.filter((character) => character.id !== id))
    }
    
    useEffect(() => {
      !access && navigate('/');
   }, [access]);

  const login = (userData) => {
    if (userData.email === email && userData.password === password){
      setAccess(true);
      navigate('/home');
    }
  }

  const logOut = () => {
    setAccess(false)
    navigate("/")
  }
  console.log(access)
  
  return (
    <div className="App">
      <Nav onSearch={onSearch} logOut= {logOut}/>
      <Routes>
        <Route path="/" element={<Form login={login} />}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
