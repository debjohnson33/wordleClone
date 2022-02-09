import React, { useState } from "react";
import axios from "axios";

import GuessResult from "./GuessResult.jsx";

const WordGuessForm = ({currentWord}) => {
  const [guess, setGuess] = useState("");
  const [wordsStartingWith, setWordStartingWith] = useState([]);
  const [numGuesses, setNumGuesses] = useState(0);
  const [win, setWin] = useState(false);

  const getWordsStartingWith = (word) => {
    let letter = word.charAt(0);
    axios.get(`/api/words/startWith?letter=${letter}`)
      .then(res => {
        setWordStartingWith(res.data);
      })
  }

  const checkGuess = (guess, currentWord) => {
    setNumGuesses(numGuesses + 1);
    if (guess === currentWord) {
      setWin(true);
    } else {
      // check if guess is in the list of words starting with the first letter
      // check each letter to see if it's in the word
      // change the background of the letter
      //    if in the word but wrong place, change to yellow
      //    if in the word and right place, change to green
      //    if not in word at all change to black
      setWin(false);
    }
  }

  return (
    <div>
      <GuessResult numGuesses={numGuesses} win={win} />
      <form onSubmit={event => {
          event.preventDefault();
          getWordsStartingWith(event.target[0].value);
          checkGuess(event.target[0].value, currentWord);
          setGuess("");
        }}
      >
        <label htmlFor="word">Guess a 5 letter word</label>
        <input
          type="text"
          name="word"
          id="word"
          max="5"
          value={guess}
          onChange={event => {
            if (event.target.value.length <= 5) {
              setGuess(event.target.value);
            } else {
              alert("5 letters max");
              setGuess("");
            }
          }
        }
        ></input>
        <input type="submit"></input>
      </form>
    </div>

  );
};

export default WordGuessForm;