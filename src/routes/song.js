const express = require('express');
const SongCtrl = require('../controllers/songController');

const Router = express.router();

Router.get('/', SongCtrl.find)
      .post('/', SongCtrl.create)
      .get('/:key/:value')
      .put('/:key/:value')
      .delete('/:key/:value')

module.exports = Router;
