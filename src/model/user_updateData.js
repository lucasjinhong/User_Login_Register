const user_mongoose = require('../db/user_mongoose');
const User = require('../model/user_db');

result = {};

function updateData(id, data){
    return new Promise ((resolve, reject) => {

        var re = /^[0-9a-fA-F]{24}$/;

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

module.exports = async function update(id, data){
    await updateData(id, data);
}