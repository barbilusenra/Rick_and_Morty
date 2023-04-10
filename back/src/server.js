const express = require('express');
const server = express();
const morgan = require ("morgan");
const PORT = 3001;
const router = require ("../src/routes/index");
const cors = require ("cors");

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use("/rickandmorty", router);

server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});




// const http = require ("http");
// const getCharByid = require("./controllers/getCharByid");
// const getCharDetail = require("./controllers/getCharDetail");
// const PORT = 3001;

// http
// .createServer((req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const id = req.url.split("/").pop();
//     //localhost:3001/rickandmorty/character/4 
//     // req.url: rickandmorty/character/4 
//     // split [rickandmorty/character/4] ---> yo quiero solo obtener el 4
//     if (req.url.includes ("onsearch")) {
//         getCharByid(res, id);
//     }      
//     if(req.url.includes("detail")) {
//         getCharDetail(res, id)
//     }
// })
// .listen(PORT, "localhost");