
//! Clase del uso de WINSTON y BUILD LOGGER
const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hola mundo');

logger.error('Esto es algo malo')
















//PROMISES
//const getPokemonById = require('./js-foundation/06-promises');

// getPokemonById(25)
//     .then((pokemon) => { console.log({ pokemon }); })
//     .catch((error) => { console.log('Intente más tarde'); })
//     .finally(() => { console.log('finalmente'); });




//! referencia a la funcion factory y uso
// const { getUUID, getAge } = require('./plugins');

// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = { name: 'Yuniel', birthdate: '2000-11-15' };

// const john = makePerson(obj);

// console.log({ john });

