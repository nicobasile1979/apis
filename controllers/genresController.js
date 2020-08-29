const db = require('../database/models')


module.exports = {
    getAll: function(req, res) {
        db.Genre.findAll()
        .then(function(result) {
            return res.status(200).json(result)
        })
    },
    getById: function(req, res) {
        db.Genre.findByPk(req.params.id)
        .then(function(result) {
            return res.status(200).json(result)
        })
    },
    create: function(req, res) {
        db.Genre.create({
            id: req.body.id,
            name: req.body.name,
            
            
        })
            .then(function(result) {
            return res.status(201).json(result)
        })

        
    }
}