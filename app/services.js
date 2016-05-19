var dao = require('./dao.js');

exports.get = function(next) {
    dao.get(function(err, result) {
        next(err, result);
    });
}
