const pool = require('./pool.js');

pool.connect('connect', () => {
  console.log('connected to the wordle clone db');
});

// does not work --- error pool.connect is not a function -- seeded db file on command line
const seedWordTable = () => {
  const seedWordQuery = `COPY words FROM '/Users/debjohnson/Development/code/wordleclone/db/words.csv' DELIMITER ',' CSV;`;
  client.query(seedWordQuery)
    .then((res) => {
      console.log(res);
      client.end();
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
}

seedWordTable();