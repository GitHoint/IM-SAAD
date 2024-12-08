/*
Title: Login
Description: this class is composed of the user model and uses it to perform searchs of the user database to provide login details
Primary Author: Patrick Newell
Further Authors:
Date Last Modified: 24/11/2024
Technologies: Nodejs
Notes:

*/

var user = require('../models/user');

class login{
    constructor(){
        this.user = new user();
    }
    loginUser(email,callback){
        this.user.userSearch(' email = ' + email,function(results){
            callback(results);
        });
    }
}
module.exports = login;