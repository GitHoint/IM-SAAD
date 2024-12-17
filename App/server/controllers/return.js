/*
Title: Return
Description: this a class that controls the return of media using the media model as a composed class
in children classes
Primary Author: Patrick Newell
Further Authors:
Date Last Modified: 24/11/2024
Technologies: Nodejs
Notes:

*/



var media = require('../models/media');

class returner{
    constructor(){
        this.media = new media();
    }
    async returnMedia(mediaId){
        this.media.mediaUpdate('userId = 1','mediaId = '+ mediaId);
    }
}

module.exports = returner;