const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const path = require('path');
const db = require('../dbconnection');

const app = express();

app.get('/getpages', function (req, res) {
    let getPagesStmt = `SELECT * FROM pages WHERE posted = 1`;

    db.each(getPagesStmt, (err, row) => {
        if (err) { throw err; }
        console.log(`${row.page_path}`)
    })
    res.end();
});