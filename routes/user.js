var express = require('express');
var router = express.Router();

var user_controller = require('../src/controllers/user_controller')

router.route('/register')
  .post(user_controller.toRegister);

router.route('/verified/:id')
  .post (user_controller.toVerified);

router.route('/login')
  .post(user_controller.toLogin);

router.route('/update')
  .put(user_controller.toUpdate);

module.exports = router;