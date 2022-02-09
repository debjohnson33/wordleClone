import React, { useState } from "react";
import axios from "axios";

const WordGuessForm = ({currentWord}) => {
  const [guess, setGuess] = useState("");
  const [wordsStartingWith, setWordStartingWith] = useState([]);


  const getWordsStartingWith = (word) => {
    let letter = word.charAt(0);
    axios.get(`/api/words/startWith?letter=${letter}`)
      .then(res => {
        setWordStartingWith(res.data);
      })
  }

  const checkGuess = (guess, currentWord) => {
    if (guess === currentWord) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <form onSubmit={event => {
      event.preventDefault();
      getWordsStartingWith(event.target[0].value)
    }}>
      <label htmlFor="word">Guess a 5 letter word</label>
      <input
        type="text"
        name="word"
        id="word"
        onChange={event => setGuess(event.target.value)}
      ></input>
      <input type="submit"></input>
    </form>
  );
};

export default WordGuessForm;