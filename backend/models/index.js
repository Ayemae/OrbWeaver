const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('./db/orbweaver.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.log(err.message);
    }
    console.log('Connected to the Orbweaver database.')
});

const getPages = require("./getPages");
const uploadPage = require("./uploadPage");

// close connection
// db.close((err) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('Database connection is closed.')
// })

module.exports = db;