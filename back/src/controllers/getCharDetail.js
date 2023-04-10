const axios = require("axios");
const URL= "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
// localhost:3001/rickandmorty/onsearch/1
    const { detailId } = req.params;
    axios(URL + detailId).then(
        (response) => {
            const character = {
                id: response.data.id,
                name: response.data.name,
                image: response.data.image,
                gender: response.data.gender,
                species: response.data.species,
                status: response.data.status,
                origin: response.data.origin   // origin es un objeto, el ? se usa por si no lo encuentra,
                                                     // para que no rompa si no existe.
            };
            res.status(200).json(character);
            // 500 --> error de servidor
        }, (error) => res.status(500).json(error.message)

        );
}


module.exports = { getCharDetail }; 







// const axios = require("axios");

// const getCharDetail = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data => {
//         const character = {
//             id: data.id,
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species,
//             status: data.status,
//             origin: data.origin?.name
//         };

//         res
//         .writeHead(200, { "Content-Type": "application/json" })
//         .end(JSON.stringify(character));
//     })
//     .catch(
//         (error) =>
//             res
//             .writeHead(500, {"Content-type": "text/plain"})
//             .end(`Personaje con id:${id} no fue encontrado`))
    
// }

// module.exports = getCharDetail;