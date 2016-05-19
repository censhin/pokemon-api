var db = require('./db.js');

exports.get = function(next) {

    var collection = db.getDb().collection('pokemon');

    collection.find({}, { _id: 0 }).toArray(function(err, results) {
        next(err, results);
    });
}
