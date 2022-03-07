# Wordle Clone

This is a clone of the Wordle game where you try to guess the 5 letter word. As you make guesses, the background of the letters changes to show if the letter is in the word, in the word but in the wrong position, or not in the word at all.

This version gives the user 8 tries to guess the word and whether you win or lose, it resets the page to let you try another random word.

Next improvements I would make to this game:

- Add cookies or something to keep track of statistics based on what device user is on like the original game

- Implement a different way for the user to input their guess like the original game with 1 letter at a time (vs the input box)

## Development

If you want to contribute or make your own version, fork and clone this repo, then run

```npm install```

It is set up to use PostgreSQL, so you will need to create a database with the name 'wordleclone' before you can use the connection. You will have to change the connection setup to reflect the correct user, host, port, etc in the ```db/pool.js``` file. You will also need to seed the database with the words using the command line while signed into the database using the query on line 9 in ```db/seedDB.js```. (It is possible that this was a problem with my local environment, so you could try to run ``` npm run seed``` to see if it works.)

Once you have successfully seeded the database, you can start the server with

```npm start```

and build using webpack with

```npm run build```

Then you can open it up on the browser by going to:

```http://localhost:3000```
