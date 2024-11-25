var media = require('../models/media');

class search{
    constructor(){
        this.media = new media()
    }
    async searchMedia(){
        this.media.mediaSelect()
    }
}