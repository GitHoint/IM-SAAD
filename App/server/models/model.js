var mysql = require('mysql');
var connection = require('./connection');

//creates a coonection to the databbase
// allows insertion
// selection
// deletion

class model extends connection{
    constructor(){
        super('MySqlSAAD','Group21','35.246.42.167','saaddb','3306');
    }
    async select(table,columns,where){

    }
    async insert(table, columns,entry){

    }
    async delete(){

    }
}


module.exports = model;