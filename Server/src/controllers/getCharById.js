const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}${id}`)
    
    // let response = await axios.get(`${URL}${id}`)
    // const {status,name, species, origin, image, gender} = response.data
    
    // if (!data.name) throw new Error (`Faltan datos del personaje con ID : ${id}`)
    
    const character ={
      id : data.id,
      name : data.name,
      species : data.species,
      origin : data.origin,
      image : data.image,
      gender : data.gender,
      status : data.status
    }
    if(!character) {return res.status(404).send("Not found")}
    return res.status(200).json(character)
    // return res.status(404).send('Not found');

  } catch (error) {
    // if (!data.name) return res.status(404).send("character not found")
    // return res.status(404).send(error.message)

    return error.message.includes('ID')
    ? res.status(400).send(error.message) 
    : res.status(500).send(error.response.data.error) //! si falla poner "error.message"
  }

}

module.exports = {
  getCharById,
};

