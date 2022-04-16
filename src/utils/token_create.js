const jwt = require('jsonwebtoken')
const env = require('../config/development_config')

function token(data){

    var token = jwt.sign({
        algorithm: 'HS256',
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: data
    }, env.secret);

    return token;
}

function emailToken(data){

    var token = jwt.sign({
        algorithm: 'HS256',
        exp: Math.floor(Date.now() / 1000) + (60 * 10),
        data: data
    }, env.secret);

    return token;
}

module.exports = {
    token: token,
    emailToken: emailToken
}