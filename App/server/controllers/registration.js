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