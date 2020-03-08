-- Drops the programming_db if it already exists
-- Only for development (not best practices)
DROP DATABASE IF EXISTS burgers_db;

-- Created the DB "employee_trackerDB" (only works on local connections)
CREATE DATABASE burgers_db;

-- Use the DB employee_trackerDB for all the rest of the script
USE burgers_db;

-- Created the table "burgers"
CREATE TABLE burgers (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  burger_name varchar(50) UNIQUE NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT 0
);