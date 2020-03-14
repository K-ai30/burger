require('dotenv').config();

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    // Port; if not 3306
    port: process.env.PORT || 3000,
    // Your username
    user: "root",
    // Your password
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

  connection.connect(err => {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;