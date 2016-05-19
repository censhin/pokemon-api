var db = require('./db.js');

exports.get = function(next) {
    var collection = db.getDb().collection('pokemon');

    collection.find({}, { _id: 0 }).toArray(function(err, docs) {
        next(err, docs);
    });
}

exports.getById = function(id, next) {
    var collection = db.getDb().collection('pokemon');

    collection.findOne({ name: id }, { _id: 0 }, function(err, doc) {
        next(err, doc);
    });
}
