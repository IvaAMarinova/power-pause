import mysql from "mysql2";
import * as dotenv from "dotenv"; 
dotenv.config()

const pool = mysql
  .createPool({
    host: "db4free.net",
    user: process.env.MYSQL_PASSWORD,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getUsers() {
  const [rows] = await pool.query("SELECT * FROM USER");
  return rows;
}

export async function getUserByEmail(email) {
  const [rows] = await pool.query("SELECT * FROM USER WHERE EMAIL = ?", [
    email,
  ]);
  return rows[0];
}

export async function getUserByID(id) {
  const [rows] = await pool.query("SELECT * FROM USER WHERE ID = ?", [id]);
  return rows[0];
}

export async function getUserPassword(email) {
  const user = await getUserByEmail(email);
  return user.PASSWORD;
}

export async function createUser(first_name, last_name, email, password) {
  const result = await pool.query(
    "INSERT INTO USER (FIRST_NAME, LAST_NAME, EMAIL, PASSWORD) VALUES (?, ?, ?, ?)",
    [first_name, last_name, email, password]
  );
  return result;
}
