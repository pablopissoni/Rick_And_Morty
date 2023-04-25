const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
  const { id } = req.params; //! si falla comprobar que no sea Params con mayuscula

  axios.get(`${URL}${id}`)
  .then((response => response.data)) //? El .get no es obligatorio, ya esta por defecto
  .then(({status,name, species, origin, image, gender}) => {
    if(name){
      const character ={
        id,
        name,
        species,
        origin,
        image,
        gender,
        status
      }

      return res.status(200).json(character)
    }

    return res.status(404).send('Not found');
  })

  .catch(error => res.status(500).send(error.message))
}

module.exports = {
  getCharById,
};

// // import axios from "axios"
// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then(({ name, gender, species, image, origin, status }) => {
//       const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status,
//       };

//       return res
//         .writeHead(200, { "Content-type": "application/json" })
//         .end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       return res
//         .writeHead(500, { "Content-type": "text/plain" })
//         .end(error.message);
//     });
// };

// module.exports = {
//     getCharById,
// };
