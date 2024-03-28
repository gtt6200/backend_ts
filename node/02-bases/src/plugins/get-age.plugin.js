const getAgePlugin = require('get-age');

const getAge = (birthadte) => {
    if (!birthadte) return new Error('Birthdate is required');

    return getAgePlugin(birthadte);
}

module.exports = {
    getAge,
}