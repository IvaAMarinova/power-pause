import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7613982',
    password: 'MJdigJSUWK',
    database: 'sql7613982'
}).promise()

async function getUsers() {
    const [rows] = await pool.query("SELECT * FROM USER")
    return rows
}

async function getUser(email) {
    const [rows] = await pool.query(
        "SELECT * FROM USER WHERE EMAIL = ?",
        [email])
    return rows[0]
}

async function createUser(first_name, last_name, email, password) {
    const result = await pool.query(
        "INSERT INTO USER (FIRST_NAME, LAST_NAME, EMAIL, PASSWORD) VALUES (?, ?, ?, ?)",
        [first_name, last_name, email, password])
    return result
}
