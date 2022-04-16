const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

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
    email_authorization: {
        authorization_code: {
            type: Number
        },
        authorized:{
            type: Boolean
        },
        authorized_date:{
            type: Date
        }
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