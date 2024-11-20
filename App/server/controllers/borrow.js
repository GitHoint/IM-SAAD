var media = require('../models/media');

class borrow{
    constructor(){
        this.media = new media()
    }
    async borrower(memberId,mediaId){
        this.media.mediaUpdate('mediaId = '+ mediaId,'userId = ' + memberId);
    }
}
module.exports = borrow;