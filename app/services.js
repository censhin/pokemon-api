var dao = require('./daos.js');

exports.get = function(next) {
    dao.get(function(err, result) {
        next(err, { pokemon: result });
    });
}

exports.getById = function(id, next) {
    dao.getById(id, function(err, result) {
        next(err, result);
    });
}
