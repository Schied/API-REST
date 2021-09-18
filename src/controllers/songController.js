const Song = require('../models/Song');

exports.getAll = (req, res)=>{
    Song.find({})
        .then(songs => songs ? res.status(200).send({songs}) : res.status(204).send({message: ''})
        ).catch(e => res.status(500).send({e}));
};


exports.filter = (req, res) => {

};

exports.create = (req, res) => {
    new Song(req.body).save().then(song => res.status(201).send({song})).catch(e => res.status(500).send({e}))
};

exports.update = (req, res) => {

};

exports.remove = (req, res) => {

};
