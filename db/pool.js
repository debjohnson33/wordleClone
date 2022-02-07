const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
  user: 'debjohnson',
  host: 'localhost',
  database: 'wordleclone',
  port: 5432
});


module.exports = {client};