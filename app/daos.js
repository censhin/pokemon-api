var assert = require('assert');
var db = require('./db.js');

var collection = db.getDb().collection('pokemon');

exports.read = function(next) {
    collection.find({}, { _id: 0 }).toArray(function(err, docs) {
        assert.equal(null, err);
        next(err, docs);
    });
}

exports.readById = function(id, next) {
    collection.findOne({ name: id }, { _id: 0 }, function(err, doc) {
        assert.equal(null, err);
        assert.equal(1, docs.length);
        next(err, doc);
    });
}

exports.create = function(body, next) {
    collection.insertOne(body, function(err, result) {
        assert.equal(null, err);
        assert.equal(1, result.insertedCount);
        next(err, result);
    });
}

exports.update = function(id, body, next) {
    collection.updateOne(id, body, function(err, result) {
        assert.equal(null, err);
        assert.equal(1, result.matchedCount);
        assert.equal(1, result.modifiedCount);
        next(err, result);
    });
}

exports.delete = function(id, next) {
    collecton.deleteOne(id, function(err, result) {
        assert.equal(null, err);
        assert.equal(1, result.deletedCount);
        next(err, result);
    });
}
