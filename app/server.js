var express = require('express');

var db = require('./db.js');
var routes = require('./routes.js');

var server = express();
var port = 8000;
var host = '172.17.0.2';
var dbPort = '27017';
var url = 'mongodb://' + host + ':' + dbPort + '/pokedex';

routes(server);

db.connect(url, function(err, database) {
    if(err) {
        console.log('Unable to connect to MongoDB');
        process.exit(1);
    } else {
        console.log('Connected to MongoDB at %s', url);
        server.listen(port, function() {
            console.log('Server listening on port %s', port);
        });
    }
});

exports.server = server;
