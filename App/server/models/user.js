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
        this.insert(entry,'INSERT INTO users(username,password,role) VALUES (?,?,?)');
    }
}

module.exports = userModel;
