const dotenv = require('dotenv').config();

module.exports = {
    email: {
        email: process.env.EMAIL,
        password: process.env.PASSWORD
    },
    secret: process.env.SECRET
}