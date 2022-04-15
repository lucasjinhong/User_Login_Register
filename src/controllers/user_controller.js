var mongoose = require('mongoose');
var User = require('../model/user_db');

var async_catch = require('../utils/async_catch');
var email_send = require('../utils/email_send');
var password_encryption = require('../utils/password_encryption');
var token_create = require('../utils/token_create');

var register = require('../model/user_register');
var login = require('../model/user_login');
var verify = require('../model/user_verification');
var update = require('../model/user_updateData');


exports.toRegister = async_catch(async(req, res, next) =>{

  var password = password_encryption(req.body.password);

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

exports.toLogin = async_catch(async(req, res, next) => {

  var password = password_encryption(req.body.password);

  var data = new User({
    email: req.body.email,
    password: password
  })

  var search = await login(data);
  await res.setHeader('token', token_create(search._id));
  await res.status(200).send('login successful!');
})

exports.toUpdate = async_catch(async(req, res, next) => {

  var token = req.headers['token'];
  var password = password_encryption(req.body.password);

  var data = new User({
    username:req.body.username,
    password: password,
    update_date: new Date()
  });

  var auth = await verify(token);
  await update(auth, data);
  await res.status(200).send('update success')
})