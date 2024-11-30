/*
Title: Registration
Description: this is a class composed of the user model class that deals with controls user registration/creation.
Primary Author: Patrick Newell
Further Authors:
Date Last Modified: 24/11/2024
Technologies: Nodejs
Notes:

*/


var user = require('../models/user');

class registraion{
    constructor(){
        this.user = new user();
    }
    async register(name,pass,job){
        let member = [
            name,
            pass,
            job,
        ]
        this.user.userInsert(member);   
    }
}
module.exports = registraion;