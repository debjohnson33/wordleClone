const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const db = require('../db/pool.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public/dist'));

app.get('/api/words/all', (req, res) => {
  db.getAllWords((err, results) => {
    console.log(`Getting all words`);
    err ? console.log(err) : res.send(results);
  });
});

app.get('/api/words/startWith?', (req, res) => {
  let letter = req.query.letter;
  db.getWordsStartWithRange(letter, (req, err, results) => {
    console.log(`Getting words starting with ${letter}`);
    err ? console.log(err) : res.send(results);
  });
});

app.get('/api/getRandomWord', (req, res) => {
  db.getRandomWord((err, results) => {
    console.log(`Getting random word`);
    err ? console.log(err) : res.send(results);
  });
});

app.listen(PORT, () => {
  console.log(`Wordle Clone App listening on port ${PORT}!`);
});