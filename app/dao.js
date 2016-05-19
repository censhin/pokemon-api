var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/pokedex';

exports.get = function(next) {
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);

        var col = db.collection('pokemon');

        col.find().toArray(function(err, results) {
            assert.equal(null, err);
            next(err, results);
            db.close();
        });
    });
}
