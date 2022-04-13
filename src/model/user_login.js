var user_mongoose = require('../db/user_mongoose');
var User = require('../model/user_db');

var result = {}

function loginCheck(email, password){
    return new Promise((resolve, reject) => {
        User.findOne({email:email, password:password}, function(err, obj){
            if(err){
                result.status = 500;
                result.message = err;
                reject(result);
                return;
            }

            if(!obj){
                result.status = 401;
                result.message = 'login failed';
                reject(result);
            }
            else{
                resolve(obj);
            }
        })
    })
};

module.exports = async function login(data) {
    let result = await loginCheck(data.email, data.password);
    return result;
}