/*
Title: Model
Description: this is a parent class for all database models that creates basic functionaloty to be expanded upon
in children classes
Primary Author: Patrick Newell
Further Authors:
Date Last Modified: 24/11/2024
Technologies: Nodejs, Mysql
Notes:
-lookup how callback works if you wish to do selection 
*/

const mysql = require('promise-mysql');
var connection = require('./connection');

class model extends connection{
    constructor(){
        super('MySqlSAAD','Group21','35.246.42.167','saaddb','3306');
    }
    async select(table,columns,where,callback){ 
        let conn = await this.createTcpPool();
        conn.query('SELECT  '+ columns + ' FROM ' + table + ' WHERE ' + where, function(err, results, fields) { // query database
        if (err) throw err;
        callback(results);
    });
    }
    async insert(entry,sql){
        let conn = await this.createTcpPool();
        conn.query(sql, entry, function(err, results) {    // query database using sql
            if (err) throw err; // error handle
            console.log('Inserted Row ID:', results.insertId); // confirmation of query 
        });
    }
    async delete(table, where){
        let conn = await this.createTcpPool();
        conn.query('DELETE FROM ' + table + ' WHERE ' + where  ,function(err, results) {
            if (err) throw err;
            console.log('DELETED');
        });
    }
    async update(table,value,where){
        let conn = await this.createTcpPool();
        conn.query('UPDATE ' + table + ' SET ' + value + ' WHERE ' + where,function(err, results) {
            if (err) throw err;
            console.log('updated');
        });
    }
    async testQuery(callback) {
        let conn = await this.createTcpPool(); // creation of connection to database
        let result; // declare result variable

        conn.query('SELECT * FROM users;', async function(err, results, fields) { // query database
            if (err) throw err;
            callback(results)// return results
        });
    }
}


module.exports = model;