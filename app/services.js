var dao = require('./daos.js');

exports.get = function(next) {
    dao.read(function(err, result) {
        if(result) {
            next(err, { pokemon: result });
        } else {
            next(err, { pokemon: [] });
        }
    });
}

exports.getById = function(id, next) {
    dao.readById(id, function(err, result) {
        if(result) {
            next(err, result);
        } else {
            next(err, {});
        }
    });
}

exports.create = function(body, next) {
    dao.create(body, function(err, result) {
        next(err, result);
    });
}

exports.update = function(id, body, next) {
    dao.update(id, body, function(err, result) {
        next(err, result);
    });
}

exports.delete = function(id, next) {
    dao.delete({ name: id }, function(err, result) {
        next(err, result);
    });
}
