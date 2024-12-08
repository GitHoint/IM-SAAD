/*
Title: Account
Description: this is a class composed of the user model class that deals with accountdetails and controls their updating and manipulation
Primary Author: Patrick Newell
Further Authors:
Date Last Modified: 24/11/2024
Technologies: Nodejs
Notes:

*/


var user = require('../models/user');

class account{
    constructor(email,password){
        this.member = new user();
        this.password = password;
        this.email = email;
        this.login = 'email = ' + email + ' AND ' + ' password = ' + password; 
    }
    email(email){
        this.member.userUpdate('email = ' + email ,this.login);
    }
    password(password){
        this.member.userUpdate('password = ' + password,this.login);
    }
    username(username){
        this.member.userUpdate('username = ' + username,this.login);
    }
    birth(dob){
        this.member.userUpdate('dob = ' + dob,this.login);
    }
    phone(phone){
        this.member.userUpdate('phone = ' + phone,this.login);
    }
}
