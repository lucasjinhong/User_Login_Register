const jwt = require('jsonwebtoken');
const env = require('../config/development_config');

var result = {}

function verification(token){

    const time = Math.floor(Date.now() / 1000);

    return new Promise((resolve, reject) => {

        if(!token){
            result.status = 422;
            result.message = 'pls input token';
            reject(result);
            return;
        }

        if(token){
            jwt.verify(token, env.secret, function(err, decoded){
                if(err){
                    verify = false;
                    resolve(verify);
                }
                else if(decoded.exp <= time) {
                    verify = false;
                    resolve(verify);
                }
                else {
                    verify = decoded.data;
                    resolve(verify);
                }
            })
        }
    });
}

function tokenCheck(token){

    return new Promise((resolve, reject) => {
        if(!token){
            result.status = 401;
            result.message = 'invalid token';
            reject(result);
            return;
        }
        else{
            resolve(token);
        }
    })
}

module.exports = async function verify(token){
     
    var result = await tokenCheck(await verification(token));
    return result;
}