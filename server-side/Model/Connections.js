require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: process.env.USER_DATABASE,
  password: process.env.PASSWORD_DATABASE,
  database: 'todo_list',
});

module.exports = connection;
