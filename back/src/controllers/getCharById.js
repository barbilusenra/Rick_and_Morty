const axios = require("axios");
const  URL= "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
// localhost:3001/rickandmorty/onsearch/1
    const { id } = req.params;
    axios(URL + id).then(
        (response) => {
            const character = {
                id: response.data.id,
                name: response.data.name,
                image: response.data.image,
                gender: response.data.gender,
                species: response.data.species
            };
            res.status(200).json(character);
            // 500 --> error de servidor
        }, (error) => res.status(500).json(error.message)

        );
}


module.exports = { getCharById };  //por si necesito exportar más de una cosa


// const axios = require("axios");

// const getCharByid = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data => {
//         const character = {
//             id: data.id,
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species
//         };

//         res

//         .writeHead(200, { "Content-Type": "application/json" })
//         .end(JSON.stringify(character))
//     })
//     .catch(
//         (error) =>
//         res
//         .writeHead(500, {"Content-type": "text/plain"})
//         .end(`Personaje con id:${id} no fue encontrado`)
//     )
// }

// module.exports = getCharByid;