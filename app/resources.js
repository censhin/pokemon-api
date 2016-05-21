var service = require('./services.js');

exports.healthCheck = function(req, res) {
    res.send('I am alive!\n');
}

exports.get = function(req, res) {
    service.get(function(err, result) {
        if(err) {
            res.status(500).render('error', { error: err });
        } else {
            res.status(200).json(result);
        }
    });
}

exports.getById = function(req, res) {
    service.getById(req.params.id, function(err, result) {
        if(err) {
            res.status(500).render('error', { error: err });
        } else {
            res.status(200).json(result);
        }
    });
}

exports.create = function(req, res) {
    service.create(req.body, function(err, result) {
        if(err) {
            res.status(500).render('error', { error: err });
        } else {
            res.status(204);
        }
    });
}

exports.update = function(req, res) {
    service.update(req.params.id, req.body, function(err, result) {
        if(err) {
            res.status(500).render('error', { error: err });
        } else {
            res.status(204);
        }
    });
}

exports.delete = function(req, res) {
    service.delete(req.params.id, function(err, result) {
        if(err) {
            res.status(500).render('error', { error: err });
        } else {
            res.status(204);
        }
    });
}
