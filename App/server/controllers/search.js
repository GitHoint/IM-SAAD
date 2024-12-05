var media = require('../models/media');

class search{
    constructor(){
        this.media = new media()
    }
    async searchMedia(where,callback){
        this.media.mediaSearch(where,function(res){
            callback(res);
        })
    }
}
module.exports = search;