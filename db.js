// db.js

const mysql = require('mysql2');

// Create a database connection
const db = mysql.createConnection({
  host: 'localhost', // MySQL server hostname
  user: 'root', // MySQL username
  password: 'Buffeldebuffel1254', // MySQL password
  database: 'ts', // Name of the database you want to connect to
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = db;