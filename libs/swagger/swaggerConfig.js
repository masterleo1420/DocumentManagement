const swaggerUI = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('yaml')
const file = fs.readFileSync('./swagger.yaml', 'utf8');
const swaggerDocument = yaml.parse(file);

module.exports = {
    swaggerUI,
    swaggerDocument
}