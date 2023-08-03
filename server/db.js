const { Pool } = require('pg');
require('dotenv').config();

console.log('ENV VARIABLES:', process.env); 


const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DB_PORT,
  database: process.env.DATABASE_NAME
});

pool.on('error', (err) => {
  console.error('DATABASE ERROR:', err); 
});

module.exports = pool;
