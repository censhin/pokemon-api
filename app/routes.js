var resources = require('./resources');

var routes = function(server) {
    server.get('/healthcheck', resources.healthCheck);
    server.get('/pokemon', resources.get);
    server.get('/pokemon/:id', resources.getById);
}

module.exports = routes;
