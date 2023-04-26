let myFavorites = [];

function postFav(req, res) {
    try {
        const character = req.body;
        const characterFound = myFavorites.find( fav => fav.id === character.id)
    
        if (characterFound) throw Error ('El personaje ya esta agregado en favoritos')

        myFavorites.push(character);

        return res.status(200).json(myFavorites);    
        
    } catch (error) {
        return res.status(404).send(error.message);    
    }

    return res.status(404).send("Ya existe en favoritos")
}

function deleteFav(req, res) {
  const { id } = req.params;
  myFavorites = myFavorites.filter((character) => character.id !== +id);

  return res.status(200).json(myFavorites)
}



module.exports ={
    postFav,
    deleteFav
}