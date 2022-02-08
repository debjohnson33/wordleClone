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

const getWordsStartWithRange = (letter, callback) => {
  const getWordsStartQuery = `SELECT * FROM words WHERE word LIKE '${letter}%';`;
  pool.query(getWordsStartQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, null, res.rows);
    }
  });
};

const getRandomWord = (callback) => {
  let randomId = Math.floor(Math.random() * 2499);
  const getRandomWordQuery = `SELECT * FROM words WHERE id = ${randomId};`;
  pool.query(getRandomWordQuery, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res.rows);
    }
  });
};

module.exports = {
  pool,
  getAllWords,
  getWordsStartWithRange,
  getRandomWord
};