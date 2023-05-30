const express = require('express');
const server = express();
const router = require('./routes//index')
const PORT = 3001;
const morgan = require('morgan')

server.use(express.json());
server.use(morgan('dev'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use('/rickandmorty', router);

server.listen(PORT, () => { //* inicia el server en la direccion de la variable PORT
   console.log(`Server raised in port: ${PORT}`);
});



// ------------ PARA BORRAR CONTENIDO
// const http = require("http")
// const { getCharById } = require('./controllers/getCharById')
// // import http from require("http")

// // const data = require("./utils/data")


// http.createServer((req, res) => {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    
    //     if(req.url.includes(`/rickandmorty/character`)){
        //         const id = req.url.split('/').at(-1);
        
        
        //         getCharById(res, +id);
        //     }
        
        // }).listen(3001, "localhost")
        // ------------ PARA BORRAR CONTENIDO
