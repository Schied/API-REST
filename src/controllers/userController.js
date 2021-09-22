const User = require('../models/User');

exports.getAll = (req, res)=>{
    User.find({})
        .then(users => users ? res.status(200).send({users}) : res.status(204).send({message: ''})
        ).catch(e => res.status(500).send({e}));
};


exports.filter = (req, res) => {

};

exports.create = (req, res) => {
    new User(req.body).save().then(user => res.status(201).send({user})).catch(e => res.status(500).send({e}))
};

exports.update = (req, res) => {

};

exports.remove = (req, res) => {

};
