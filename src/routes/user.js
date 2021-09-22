const express = require('express');
const UserCtrl = require('../controllers/userController');

const router = express.Router();

router.get('/', UserCtrl.getAll)
      .post('/', UserCtrl.create)
      .get('/:key/:value', UserCtrl.find, UserCtrl.filter)
      .put('/:key/:value', UserCtrl.find, UserCtrl.update)
      .delete('/:key/:value', UserCtrl.find, UserCtrl.remove)

module.exports = router;
