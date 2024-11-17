const express = require('express');
const dbConn = require('./App/server/models/model');
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
let conny = new dbConn();