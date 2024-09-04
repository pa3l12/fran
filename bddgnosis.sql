CREATE DATABASE IF NOT EXISTS gnosis;

USE gnosis;

CREATE TABLE IF NOT EXISTS users(
	userID	INT auto_increment PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(50),
    pw	VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS notes(
	noteID INT auto_increment PRIMARY KEY,
    note_name VARCHAR(30),
	note_content VARCHAR(500)
);

SELECT * FROM notes;