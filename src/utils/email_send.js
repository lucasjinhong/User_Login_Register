const nodemailer = require('nodemailer');

const env = require('../config/development_config');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env.email.email,
      pass: env.email.password
    },
    tls: {
      rejectUnauthorized: false
    }
});

module.exports = function emailSend(email, code){

    var mailOptions = {
        from: env.email.email,
        to: email,
        subject: 'Authentication code of Nodejs',
        text: 'the authentication code is' + code
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Email sent successfully");
        }
    });
};