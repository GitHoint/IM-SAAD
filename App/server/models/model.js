var mysql = require('mysql');
var connection = require('./connection');

//creates a coonection to the databbase
// allows insertion
// selection
// deletion
// updating

class model extends connection{
    constructor(){
        super('MySqlSAAD','Group21','35.246.42.167','saaddb','3306');
    }
    async select(table,columns,where){ 
        let conn = await this.createTcpPool(); // creation connection to database
        let result; // decalre resut variable
        conn.query('SELECT  '+ columns + ' FROM ' + table + 'WHERE ' + where, function(err, results, fields) { // query database
        if (err) throw esrr;
        result = results; // return results
    });
    return result
    }
    async insert(table, entry){
        let conn = await this.createTcpPool(); // creation connection to database
        conn.query('INSERT INTO '+ table +'SET ?', entry, function(err, results) {    // query database using sql
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
}


module.exports = model;