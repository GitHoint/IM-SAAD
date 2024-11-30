/*
Title: connection
Description: this class creates the strucutre for a database pooling cononection to a mysql server database
Primary Author: Patrick Newell
Further Authors:
Date Last Modified: 24/11/2024
Technologies: Nodejs, PromiseMysql
*/

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
          waitForConnections: true,
          connectionLimit: 10, 
        };
        return mysql.createPool(dbConfig);
    }
}
module.exports = connectionCreator;