var dao = require('./daos.js');

exports.get = function(next) {
    dao.get(function(err, result) {
        next(err, { pokemon: result });
    });
}
