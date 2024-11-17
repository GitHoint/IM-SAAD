const express = require('express');
const user = require('./App/server/models/user');
const mysql = require('promise-mysql');
const fs = require('fs');
/*
async function connection(){
    let conn = await createTcpPool();
    console.log(conn);
    conn.query('SELECT * FROM users', function(err, results, fields) {
        if (err) throw esrr;
        console.log(results);
    });
    return conn;
}
*/


async function main(){
    person = new user();
    console.log(person);
    person.userSearch('ID = 0',function(results){
        console.log(results);
    });
}
main()