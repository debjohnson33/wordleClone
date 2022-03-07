import React, { useState, useEffect } from "react";
import axios from "axios";

import WordGuessForm from "./components/WordGuessForm.jsx";
import Alphabet from "./components/Alphabet.jsx";
import Header from "./components/Header.jsx";
import styles from "./styles.css";

import WinnerModal from "./WinnerModal.jsx";
import LoserModal from "./LoserModal.jsx";

const App = () => {
  const [currentWord, setWord] = useState("");
  // Array of green letters - pass set function to WordGuessForm
  //  then pass array to Alphabet
  const [greenLetters, setGreenLetters] = useState([]);
  // Array of yellow letters
  const [yellowLetters, setYellowLetters] = useState([]);
  // Array of black letters
  const [blackLetters, setBlackLetters] = useState([]);
  const [guess, setGuess] = useState("");
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [words, setWords] = useState([]);
  const [numGuesses, setNumGuesses] = useState(0);
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    axios.get(`/api/words/all`)
      .then(res => {
        setWords(res.data);
      })
  },[]);

  useEffect(() => {
    axios.get('/api/getRandomWord')
      .then(res => {
        console.log(res);
        setWord(res.data[0].word);
      })
  }, [""]);

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
        setNumGuesses(numGuesses + 1);
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
      if (numGuesses > 7) {
        setLose(true);
      }
    }
  }

  const renderModal = () => {
    if (win === true) {
      return <WinnerModal numGuesses={numGuesses} onQuit={onQuit} />
    } else if (lose === true) {
      return <LoserModal correctWord={currentWord} onQuit={onQuit} />
    } else {
      null
    }
  }

  const resetGame = () => {
    setWord("");
    setGreenLetters([]);
    setYellowLetters([]);
    setBlackLetters([]);
    setGuess("");
    setWin(false);
    setLose(false);
    setNumGuesses(0);
    setGuesses([]);
  }

  const onQuit = () => {
    resetGame();
    window.location.reload();
  }

  return (
    <div>
      <Header />
      <div className={styles.app}>
      <Alphabet greenLetters={greenLetters} yellowLetters={yellowLetters} blackLetters={blackLetters} />
      <WordGuessForm guess={guess} guesses={guesses} numGuesses={numGuesses} currentWord={currentWord} setGuess={setGuess} checkGuess={checkGuess} />
      {renderModal()}
      </div>
    </div>
  );
}

export default App;