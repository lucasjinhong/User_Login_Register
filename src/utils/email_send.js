var nodemailer = require('nodemailer');

var env = require('../config/development_config');

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

module.exports = function emailSend(email){

    var mailOptions = {
        from: env.email.email,
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'Register Complete!'
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Email sent successfully");
        }
    });
};