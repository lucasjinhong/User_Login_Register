var jwt = require('jsonwebtoken')
var env = require('../config/development_config')

module.exports = function token(data){

    var token = jwt.sign({
        algorithm: 'HS256',
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: data
    }, env.secret);

    return token;
}