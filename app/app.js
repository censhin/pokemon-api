var express = require('express');
var routes = require('./routes');

var app = express();
var port = 8000;

routes(app);

app.listen(port, function () {
    console.log('Server listening on port %s', port);
});

module.exports = app;
