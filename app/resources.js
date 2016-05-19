var service = require('./services.js');

exports.healthCheck = function(req, res) {
    res.send('I am alive!\n');
}

exports.get = function(req, res) {
    service.get(function(err, result) {
        if(err) {
            res.status(500).render('error', {error: err});
        } else {
            res.status(200).json(result);
        }
    });
}
