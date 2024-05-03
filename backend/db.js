const mysql = require('mysql2/promise')
const db = mysql. createPool({
host: "127.0.0.1",
user: "tyler",
password: "p@S$w0rd123",
database: "challenge_champs"
})
module.exports = db;
