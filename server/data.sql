CREATE DATABASE todoapp;

CREATE TABLE todos (
  id VARCHAR(255) PRIMARY KEY,
  user_email VARCHAR(255),
  title VARCHAR(30),
  progress INT,
  date VARCHAR(300)
);

CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(255)
);


INSERT INTO todos(id, user_email, title, progress, date) VALUES ('0', 'Veikka@gmail.com', 'First Todo', 10, 'Thu DEC 29 2023 13:25:25 GMT+0000 (GUlF STANDARD TIME)');

INSERT INTO users(email, hashed_password) VALUES('veikkap@veikkap.com', '$2b$10');