const user_mongoose = require('../db/user_mongoose');
const User = require('../model/user_db');

var result = {}

function emailCheck(data){
    return new Promise((resolve, reject) => {
        User.find({email: data.email}, 'email', function(err, obj){
            if(err){
                result.status = 500;
                result.message = err;
                reject(result);
                return;
            }

            if(obj.length >= 1){
                result.status = 409;
                result.message = 'email existed';
                reject(result);
            }
            else{
                resolve(result);
            }
        });
    })   
};

function formatCheck(email){
    return new Promise((resolve, reject) => {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(re.test(email)){
            resolve(result);
            return;
        } else {
            result.status = 422;
            result.message = 'wrong email format';
            reject(result);
        }
    })
};

module.exports = async function register(data) {
    await formatCheck(data.email);
    await emailCheck(data);
    await data.save();
};