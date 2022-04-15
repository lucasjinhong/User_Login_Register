var mongoose = require('mongoose');
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId;

var userSchema = new Schema({
    _id: ObjectId,
    email: {
        type: String, 
        required: [true, 'email is required']
    },
    username: {
        type: String, 
        required: [true, 'username is required']
    },
    password: {
        type: String, 
        required: [true, 'password is required']
    },
    register_date: {
        type: Date
    },
    update_date: {
        type: Date
    },
    last_login: {
        type: Date
    }
})

var User = mongoose.model('User', userSchema);

module.exports = User;