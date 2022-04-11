var dotenv = require('dotenv').config();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
});

module.exports = function emailSend(email){

    var mailOptions = {
        from: process.env.EMAIL,
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