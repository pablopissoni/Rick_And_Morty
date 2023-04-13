import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { addFav, removeFav, filterCards, orderCards } from '../redux/actions'
import { Connect } from 'react-redux'

 const Favorites = () => {
    const dispatch = useDispatch()
    const [aux, setAux]=useState(false)
    const favorites =  useSelector((state)=> state.myFavorites)

    function handleOrder (event){
        dispatch(orderCards(event.target.value))
        setAux(true)
    }
    function handleFilter (event){
        dispatch(filterCards(event.target.value))
    }


    return (
        <>
        <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="AllCharacters">All Characters</option>
        </select>
        <br/>
        <hr/>
        {favorites.map((fav)=>{ //Algunos tienen favorites?.map
            return (<Card
                id={fav.id}
                key={fav.id}
                name={fav.name}
                species={fav.species}
                gender={fav.gender}
                status={fav.status} //! AGREGADO VERIFICAR SI ESTA CORRECTO
                origin={fav.origin.name}
                image={fav.image}
                onClose={fav.onClose}
               
              />)
        })}


        </>
        )
}

export default Favorites;