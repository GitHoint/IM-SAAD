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
    async userUpdate(){
        this.update('users',value,where);
    }   
    async userDelete(){
        this.delete('users',where);
    }
    async userInsert(entry){
        this.insert('users',entry);
    }
}

module.exports = userModel;
