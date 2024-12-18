const mail = require("../models/email");

class mailer{
    constructor(){
        this.mail = new mail("amlibrarysystems21@hotmail.com","SAADGroup21");
    }
    send(reciever,subject,message){
        this.mail.sendMail("amlemailersaad@gmail.com",reciever,subject,message);
    }
}
module.exports = mailer;