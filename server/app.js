const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static('public/dist'));

app.listen(PORT, () => {
  console.log(`Wordle Clone App listening on port ${PORT}!`);
});