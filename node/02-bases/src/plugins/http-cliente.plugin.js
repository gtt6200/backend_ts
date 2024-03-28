const axios = require('axios');

// async function httpClientePlugin(){
//     try{
//         const response = 
//     }catch{
//         throw new Error('unespected error ocurred');
//     }
// }

const httpClientePlugin = {
    get: async (url) => {
        const { data } = await axios.get(url);
        return await data;
    },
    // get: async (url) => {
    //     const resp = await fetch(url);
    //     return await resp.json();
    // },
    post: async (url, body) => { },
    put: async (url, body) => { },
    delete: async (url) => { },
    patch: async (url) => { }
};


module.exports = {
    httpClientePlugin,
}