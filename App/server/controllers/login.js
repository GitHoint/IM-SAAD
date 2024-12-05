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