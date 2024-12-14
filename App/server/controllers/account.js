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
    constructor(){
        this.member = new user();
        this.userId = "userId = "; 
    }
    email(email,id){
        this.member.userUpdate('email = ' + "'" + email + "'" ,this.userId + id);
    }
    username(username,id){
        this.member.userUpdate('username = ' + "'" + username + "'",this.userId + id);
    }
    birth(dob,id){
        this.member.userUpdate('dob = ' + "'" + dob + "'",this.userId + id);
    }
    phone(phone,id){
        this.member.userUpdate('phone = ' + "'" + phone + "'",this.userId + id);
    }
}
module.exports = account;
