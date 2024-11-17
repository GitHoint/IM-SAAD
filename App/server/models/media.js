var model = require('./model');

class mediaModel extends model{
    constructor(){
        super()
    }
    async mediaSearch(where){
        return await this.select('media','*',where);
    }
    async mediaInsert(entry){
        this.insert('media',entry);
    }
    async mediaUpdate(value,where){
        this.update('media',value,where);
    }
    async mediaDelete(where){
        this.delete('media',where);
    }
}