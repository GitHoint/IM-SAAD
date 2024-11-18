var user = require('../models/user');

class registraion{
    constructor(){
        this.user = new user();
    }
    async register(name,pass,job){
        member = {
            username: name,
            password: pass,
            role: job,
        }
        this.user.userInsert(member);   
    }
}