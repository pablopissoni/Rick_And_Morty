import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import axios from "axios";
import { Route } from 'react-router-dom';
import { Routes } from "react-router-dom";
import About from "./components/About";
import { Detail } from "./components/Detail";

function App() {
  const [characters, setCharacters] = useState([]);
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

  
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
