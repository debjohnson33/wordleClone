import React, { useState, useEffect } from "react";
import axios from "axios";

import GuessResult from "./GuessResult.jsx";

const WordGuessForm = ({guess, currentWord, setGreenLetters, setYellowLetters, setBlackLetters, setGuess, setGuesses}) => {

  // const [wordsStartingWith, setWordStartingWith] = useState([]);
  const [words, setWords] = useState([]);
  const [numGuesses, setNumGuesses] = useState(0);
  const [win, setWin] = useState(false);

  // const getWordsStartingWith = (word) => {
  //   let letter = word.charAt(0);
  //   axios.get(`/api/words/startWith?letter=${letter}`)
  //     .then(res => {
  //       setWordStartingWith(res.data);
  //     })
  // }

  useEffect(() => {
    axios.get(`/api/words/all`)
      .then(res => {
        setWords(res.data);
      })
  },[]);

  const changeToGreenBackground = (guess) => {
    guess.split("").forEach(letter => {
      setGreenLetters(greenLetters => [...greenLetters, letter]);
    });
  }

  const checkGuess = (guess, currentWord) => {
    setNumGuesses(numGuesses + 1);
    setGuesses(guesses => [...guesses, guess]);
    if (guess === currentWord) {
      // set all letters to green from the word
      changeToGreenBackground(guess);
      setWin(true);
    } else {
      // check if guess is in the list of words
      if (words.find(element => element.word === guess)) {

        // check each letter to see if it's in the word
        for (let i = 0; i < currentWord.length; i++) {

          if (currentWord.includes(guess.charAt(i))) {
            if (currentWord.charAt(i) === guess.charAt(i)) {
              //  if in the word and right place, change to green
              // Call function to change background to green
              setGreenLetters(greenLetters => [...greenLetters, guess.charAt(i)]);
            } else {
              //  if in the word but wrong place, change to yellow
              // Call function to change background to yellow
              setYellowLetters(yellowLetters => [...yellowLetters, guess.charAt(i)]);
            }
          } else {
            // if not in word at all change to black
            // Call function to change background to black
            setBlackLetters(blackLetters => [...blackLetters, guess.charAt(i)]);
          }
        }
      } else {
        alert('Sorry, that word is not in the list of words');
      }
      setWin(false);
    }
  }

  return (
    <div>
      <GuessResult numGuesses={numGuesses} win={win} guess={guess} />

      <form onSubmit={event => {
          event.preventDefault();
          //getWordsStartingWith(event.target[0].value)
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