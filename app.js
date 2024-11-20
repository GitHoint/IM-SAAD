const express = require('express');
const user = require('./App/server/models/user');
const registerer = require('./App/server/controllers/registration');
const borrowTime = require('./App/server/controllers/borrow');
const mysql = require('promise-mysql');
const fs = require('fs');
const registraion = require('./App/server/controllers/registration');
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
    registration = new registerer();
    person.userSearch('userId = 1',function(results){
        console.log(results);
    });
    borrow = new borrowTime()
    borrow.borrower();
}
main()