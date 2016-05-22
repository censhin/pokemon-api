var bodyParser = require('body-parser');
var resources = require('./resources');

var routes = function(server) {
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.get('/healthcheck', resources.healthCheck);
    server.get('/pokemon', resources.get);
    server.post('/pokemon', resources.create);
    server.get('/pokemon/:id', resources.getById);
    server.put('/pokemon/:id', resources.update);
    server.delete('/pokemon/:id', resources.delete);
};

module.exports = routes;
