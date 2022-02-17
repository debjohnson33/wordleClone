import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles.css";

import GuessResult from "./GuessResult.jsx";
import GuessesDisplay from "./GuessesDisplay.jsx";

const WordGuessForm = ({guess, guesses, numGuesses, currentWord, setGuess, checkGuess}) => {

  return (
    <div>
      <GuessResult numGuesses={numGuesses} guess={guess} />
      <GuessesDisplay guess={guess} guesses={guesses} />
        <form onSubmit={event => {
            event.preventDefault();
            //getWordsStartingWith(event.target[0].value)
            checkGuess(event.target[0].value, currentWord);
            setGuess("");
          }}
        >
          <div className={styles.wordform}>
            <label className={styles.formitem} htmlFor="word">Guess a 5 letter word</label>
            <input
              className={styles.formitem}
              style={{fontSize: "20px", height: "30px"}}
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
            <input type="submit" className={styles.formitem}></input>
          </div>
        </form>
    </div>
  );
};

export default WordGuessForm;