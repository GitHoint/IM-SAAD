const mysql = require('promise-mysql');
const fs = require('fs');

class connectionCreator{
    constructor(name,password,host,database,port){
        this.name = name;
        this.password = password;
        this.host = host;
        this.database = database;
        this.port = port;
    }
    createTcpPool = async config => {
        const dbConfig = {
          host: this.host,
          port: this.port, 
          user: this.name, 
          password: this.password, 
          database: this.database, 
        };
        return mysql.createPool(dbConfig);
    }
}
module.exports = connectionCreator;