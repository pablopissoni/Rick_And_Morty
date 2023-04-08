import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Detail() {
  const {id} = useParams();
  const [character, setCharacter] = useState({});

  const URL = 'https://be-a-rym.up.railway.app/api/character';
  const API_KEY = "f7f034756775.3f44ea1317c2007ec4dc"


  useEffect(() => {
    axios(`${URL}/${id}?key=${API_KEY}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data); //? Setea la info en el character
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);




  return (
    <div>
      <h2>{character?.name}</h2>
      <h2>{character?.status}</h2>
      <h2>{character?.species}</h2>
      <h2>{character?.gender}</h2>
      <h2>{character?.origin?.name}</h2>
      <img src={character?.image} alt={character?.name}/>
    </div>
  );
}
