require('dotenv').config();

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 8000,
    user: "root",
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

  // Make connection
  connection.connect(err => {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  // Export connection for our ORM to use
  module.exports = connection;