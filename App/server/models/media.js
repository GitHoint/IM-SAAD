/*
Title: Media
Description: this is a child of the model super class and epands upon the fucntionality of the super class for
queries relatin to media relations in the database.
Primary Author: Patrick Newell
Further Authors:
Date Last Modified: 24/11/2024
Technologies: Nodejs
Notes:
-lookup how callback works if you wish to do selection 
*/

var model = require('./model');

class mediaModel extends model{
    constructor(){
        super() // calls the super class constrcutor in its own constructor
    }
    async mediaSearch(where,callback){
        return this.select('media','*',where,function(results){
            callback(results);
        });
    }
    async mediaInsert(entry){
        this.insert(entry,'INSERT INTO media(name,size,description,userId,type) VALUES(?,?,?,1,?)');
    }
    async mediaUpdate(value,where){
        this.update('media',value,where);
    }
    async mediaDelete(where){
        this.delete('media',where);
    }
}
module.exports = mediaModel;