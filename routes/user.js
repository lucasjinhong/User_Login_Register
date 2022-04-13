var express = require('express');
var router = express.Router();

var user_controller = require('../src/controllers/user_controller')

router.route('/register')
  .post(user_controller.toRegister);

router.route('/login')
  .post(user_controller.toLogin);

module.exports = router;