var resources = require('./resources');

var routes = function(app) {
    app.get('/healthcheck', resources.healthCheck);
}

module.exports = routes;
