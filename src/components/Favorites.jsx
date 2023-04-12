import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

 const Favorites = () => {

    const favorites =  useSelector((state)=> state.myFavorites)
    return (
        <>
        {favorites.map(({id,name,status,species,gender,origin,image})=>{
            return (<Card
                id={id}
                key={id}
                name={name}
                species={species}
                gender={gender}
                status={status} //! AGREGADO VERIFICAR SI ESTA CORRECTO
                origin={origin.name}
                image={image}
              />)
        })}


        </>
        )
}

export default Favorites;