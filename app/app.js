var express = require('express');

var db = require('./db.js');
var routes = require('./routes.js');

var app = express();
var port = 8000;
var host = 'localhost';
var dbPort = '27017';
var url = 'mongodb://' + host + ':' + dbPort + '/pokedex';

routes(app);

db.connect(url, function(err, database) {
    if(err) {
        console.log('Unable to connect to MongoDB');
        process.exit(1);
    } else {
        app.listen(port, function() {
            console.log('Server listening on port %s', port);
        });
    }
});

exports.app = app;
