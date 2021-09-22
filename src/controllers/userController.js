const { use } = require('../app');
const User = require('../models/User');

exports.getAll = (req, res)=>{
    User.find({})
        .then(users => users ? res.status(200).send({users}) : res.status(204).send({message: ''})
        ).catch(e => res.status(500).send({e}));
};

exports.find = (req, res, next) => {
    let params = {};
    params[req.params.key] = req.params.value;
    User.find(params).then(users => {
        if(!users.length) return next();
        req.body.users = users;
        return next();
    }).catch(e => {
        req.body.e = e;
        next();
    })
}

exports.filter = (req, res) => {
    if(req.body.e) return res.status(500).send({e});
    if(req.body.users) return res.status(200).send({users});
    return res.status(404).send({message: 'NOT FOUND!'});
};

exports.create = (req, res) => {
    new User(req.body).save().then(user => res.status(201).send({user})).catch(e => res.status(500).send({e}));
};

exports.update = (req, res) => {
    if(req.body.e) return res.status(500).send({e});
    if(!req.body.users) return res.status(404).send({message: 'NOT FOUND!'});
    let user = req.body.users[0];
    user = Object.assign(user, req.body);
    user.save().then(user => res.status(200).send({message: 'UPDATED', user})).catch(e => res.status(500).send({e}));
};

exports.remove = (req, res) => {
    if(req.body.e) return res.status(500).send({e});
    if(!req.body.users) return res.status(404).send({message: 'NOT FOUND!'});
    req.body.users[0].remove().then(user => res.status(200).send({message: 'REMOVED', user})).catch(e => res.status(500).send({e}));
};

