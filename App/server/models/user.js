/*
Title: User
Description: this is a child of the model super class and epands upon the fucntionality of the super class for
queries relatin to user relations in the database.
Primary Author: Patrick Newell
Further Authors:
Date Last Modified: 24/11/2024
Technologies: Nodejs
Notes:
-lookup how callback works if you wish to do selection 
*/

var model = require('./model');

class userModel extends model{
    constructor(){
        super()
    }
    async userSearch(where,callback){
        this.select('users','*',where,function(results){
            callback(results);
        });
    }
    async userUpdate(value,where){
        this.update('users',value,where);
    }   
    async userDelete(where){
        this.delete('users',where);
    }
    async userInsert(entry){
        this.insert(entry,'INSERT INTO users(username,password,role,email,dob,phone) VALUES (?,?,?,?,?,?)');
    }
}

module.exports = userModel;
