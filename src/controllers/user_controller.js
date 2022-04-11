var mongoose = require('mongoose');
var User = require('../model/user_db');
var user_mongoose = require('../db/user_mongoose');

var async_catch = require('../utils/async_catch');
var email_send = require('../utils/email_send');
var encryption = require('../utils/password_encryption');

var register = require('../model/user_register');

exports.toRegister = async_catch(async(req, res, next) =>{

  var password = encryption(req.body.password);

  var data = new User({
    _id: mongoose.Types.ObjectId(),
    email: req.body.email,
    username: req.body.username,
    password: password,
    register_date: new Date()
  });

  await register(data);
  await res.status(201).send({_id:data._id, username:data.username});

  email_send(data.email);
});