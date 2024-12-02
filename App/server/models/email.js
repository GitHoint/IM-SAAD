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
    constructor(){
         this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'youremail@gmail.com',
              pass: 'yourpassword'
            }
        });
    }
}