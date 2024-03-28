//const { v4: uuidv4 } = require('uuid');
//const { idUnique, getAge } = require('../plugins');

//const obj = { name: 'Yuniel', birthdate: '2000-11-15' };

const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}



// const john = buildPerson(obj);
// console.log(john);

module.exports = {
    buildMakePerson,
}