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
    email(){
        this.member.userUpdate('email',this.login);
    }
    password(){
        this.member.userUpdate('password',this.login);
    }
    username(){
        this.member.userUpdate('username',this.login);
    }
    birth(){
        this.member.userUpdate('dob',this.login);
    }
    phone(){
        this.member.userUpdate('phone',this.login);
    }
}
