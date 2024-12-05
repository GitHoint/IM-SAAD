/*
Title: Return
Description: this a class that controls the procuremtn of new media using the media model as a composed class
in children classes
Primary Author: Patrick Newell
Further Authors:
Date Last Modified: 24/11/2024
Technologies: Nodejs
Notes:

*/

var media = require('../models/media');

class procurement{
    constructor(){
        this.media = new media();
    }
    async procure(name,size,description,type){
        let entry = [
            name,
            size,
            description,
            type
        ]
        this.media.insertMedia(entry)
    }
}