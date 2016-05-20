var dao = require('./daos.js');

exports.get = function(next) {
    dao.get(function(err, result) {
        if(result) {
            next(err, { pokemon: result });
        } else {
            next(err, { pokemon: [] });
        }
    });
}

exports.getById = function(id, next) {
    dao.getById(id, function(err, result) {
        if(result) {
            next(err, result);
        } else {
            next(err, {});
        }
    });
}
