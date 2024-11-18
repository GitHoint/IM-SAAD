var media = require('../models/media');

class procurement{
    constructor(){
        this.media = new media();
    }
    async procure(){
        this.media.insertMedia()
    }
}