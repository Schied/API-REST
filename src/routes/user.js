const express = require('express');
const UserCtrl = require('../controllers/userController');

const Router = express.router();

Router.get('/', UserCtrl.find)
      .post('/', UserCtrl.create)
      .get('/:key/:value')
      .put('/:key/:value')
      .delete('/:key/:value')

module.exports = Router;
