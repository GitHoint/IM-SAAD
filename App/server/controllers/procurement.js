var media = require('../models/media');

class procurement{
    constructor(){
        this.media = new media();
    }
    async procure(name,size,description,type){
        entry = [
            name,
            size,
            description,
            type
        ]
        this.media.insertMedia(entry)
    }
}