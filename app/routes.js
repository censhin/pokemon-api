var resources = require('./resources');

var routes = function(server) {
    server.get('/healthcheck', resources.healthCheck);
    server.get('/pokemon', resources.get);
    server.post('/pokemon', resources.create);
    server.get('/pokemon/:id', resources.getById);
    server.put('/pokemon/:id', resources.update);
    server.delete('/pokemon/:id', resources.delete);
}

module.exports = routes;
