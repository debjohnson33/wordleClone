import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles.css";

import GuessResult from "./GuessResult.jsx";
import GuessesDisplay from "./GuessesDisplay.jsx";

const WordGuessForm = ({guess, currentWord, setGreenLetters, setYellowLetters, setBlackLetters, setGuess, setWin, win, setLose, lose}) => {

  const [words, setWords] = useState([]);
  const [numGuesses, setNumGuesses] = useState(0);
  const [guesses, setGuesses] = useState([]);

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

  const changeGuessToArrOfObjects = (guess, bgColor, color) => {
    let guessArr = guess.split("");
    let guessObjArr = [];
    guessArr.forEach(letter => {
      guessObjArr.push({letter: letter, bgColor: bgColor, color: color});
    });
    return guessObjArr;
  }

  const changeColorOfGuess = (guessArr, index, bgColor, color) => {
    guessArr[index].bgColor = bgColor;
    guessArr[index].color = color;
    return guessArr;
  }

  const checkGuess = (guess, currentWord) => {
    setNumGuesses(numGuesses + 1);
    let guessArr = changeGuessToArrOfObjects(guess, "white", "black");
    if (guess === currentWord) {
      // set all letters to green from the word
      guessArr = changeGuessToArrOfObjects(guess, "green", "white");
      changeToGreenBackground(guess);
      setGuesses(guesses => [...guesses, guessArr]);
      setWin(true);
    } else {
      // check if guess is in the list of words
      if (words.find(element => element.word === guess)) {

        // check each letter to see if it's in the word
        for (let i = 0; i < currentWord.length; i++) {
          if (currentWord.includes(guess.charAt(i))) {
            if (currentWord.charAt(i) === guess.charAt(i)) {
              //  if in the word and right place, change to green background
              setGreenLetters(greenLetters => [...greenLetters, guess.charAt(i)]);
              guessArr = changeColorOfGuess(guessArr, i, "green", "white");
            } else {
              //  if in the word but wrong place, change to yellow background
              setYellowLetters(yellowLetters => [...yellowLetters, guess.charAt(i)]);
              guessArr = changeColorOfGuess(guessArr, i, "yellow", "black");
            }
          } else {
            // if not in word at all change to grey background
            setBlackLetters(blackLetters => [...blackLetters, guess.charAt(i)]);
            guessArr = changeColorOfGuess(guessArr, i, "#6f7272", "white");
          }
        }
        setGuesses(guesses => [...guesses, guessArr]);
      } else {
        alert('Sorry, that word is not in the list of words');
      }
      setLose(true);
    }
  }

  return (
    <div>
      <GuessResult numGuesses={numGuesses} win={win} guess={guess} />
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