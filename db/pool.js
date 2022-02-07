const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const config = {
  user: 'debjohnson',
  host: 'localhost',
  database: 'wordleclone',
  port: 5432
};

const pool = new Pool(config);

const getAllWords = (callback) => {
  const getAllWordsQuery = `SELECT * FROM words;`;
  pool.query(getAllWordsQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows);
    }
  });
};

module.exports = {
  pool,
  getAllWords
};