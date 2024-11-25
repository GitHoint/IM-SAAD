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
    }
    updateDetail(){
        this.member.userUpdate('',);
    }
}
