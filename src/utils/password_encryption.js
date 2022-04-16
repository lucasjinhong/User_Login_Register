const crypto = require('crypto');

module.exports = function encryption(password){
    var hashPassword = crypto.createHash('sha256');

    hashPassword.update(password);

    var newPassword = hashPassword.digest('hex');
    return newPassword;
};