const { getUUID } = require('../plugins/get-id.plugin');
const { getAge } = require('../plugins/get-age.plugin');
const { httpClientePlugin } = require('./http-cliente.plugin');
const buildLogger = require('./logger.plugin')
//este es un archivo de barril
module.exports = {
    getUUID,
    getAge,
    httpClientePlugin,
    buildLogger,
}