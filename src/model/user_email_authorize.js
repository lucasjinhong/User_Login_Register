const user_mongoose = require('../db/user_mongoose');
const User = require('./user_db');

var result = {}

function checkCode (id, code){
    return new Promise((resolve, reject) => {
        if(!code){
            result.status = 422;
            result.message = 'pls input code';
            reject(result);
            return;
        }

        User.findById({_id:id}, 'email_authorization', function(err, obj){

            obj = obj.email_authorization.authorization_code;

            if(err){
                result.status = 500;
                result.message = err;
                reject(result);
                return;
            }
            else if (obj !== code){
                result.status = 422;
                result.message = 'wrong verification code';
                reject(result);
                return;
            }
            else{
                resolve();
            }
        })
    })
}

function Authorize(id, data){

    var re = /^[0-9a-fA-F]{24}$/;

    return new Promise((resolve, reject) => {
        if(!re.test(id)){
            result.status = 500;
            result.message = 'id error';
            reject(result);
            return;
        };

        User.findByIdAndUpdate({_id:id}, data, function(err, obj){
            if(err){
                result.status = 500;
                result.message = err;
                reject(result);
                return;
            }
            else{
                resolve();
            }
        })
    })
}


module.exports = async function emailAuthorize(id, code, data){
    await checkCode(id, code);
    await Authorize(id, data);
    return;
}