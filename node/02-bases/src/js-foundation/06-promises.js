const { httpClientePlugin: http } = require('../plugins')
// ! CÓDIGO DE async Y await PARA PROMESAS 
const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);

    //throw new Error('Pokemon no existe')
    return pokemon.name;

}

//! CÓDIGO DE THEN O PROMESAS EN CADENA
// const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
// return fetch(url)
//     .then((response) => response.json())
//     //.then(() => { throw new Error('Not Found') })
//     .then((pokemon) => pokemon.name);

// ! CÓDIGO DE PETICIONES DE CALLBACKS SOBRE CALLBACKS

// const getPokemonById = (id, callback) => {

//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     fetch(url).then((response) => {
//         response.json().then((pokemon) => {
//             callback(pokemon.name);
//         })
//     });

// }



module.exports = getPokemonById;