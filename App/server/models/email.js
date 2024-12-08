/*
Title: email
Description: this clas creates a basic framework for an email to be constrcuted further
Primary Author: Patrick Newell
Further Authors:
Date Last Modified: 24/11/2024
Technologies: Nodejs, NodeEmailer
Notes:
*/

var nodemailer = require('nodemailer');

class email{
    constructor(email, pass){
      this.email = email
      this.pass = pass;
      this.transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: this.email,
            pass: this.pass
          }
      });
    }
    sendMail(){
      var mailOptions = {
        from: 'youremail@gmail.com',
        to: 'myfriend@yahoo.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      this.transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }
}