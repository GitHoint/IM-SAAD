/*
Title: Return
Description: this a class that controls the borrowing of media using the media model as a composed class
in children classes
Primary Author: Patrick Newell
Further Authors:
Date Last Modified: 24/11/2024
Technologies: Nodejs
Notes:

*/


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