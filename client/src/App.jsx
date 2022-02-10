import React, { useState, useEffect } from "react";
import axios from "axios";

import WordGuessForm from "./components/WordGuessForm.jsx";
import Alphabet from "./components/Alphabet.jsx";
import GuessesDisplay from "./components/GuessesDisplay.jsx";
import styles from "./styles.css";

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
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    axios.get('/api/getRandomWord')
      .then(res => {
        console.log(res);
        setWord(res.data[0].word);
      })
  }, [""]);

  return (
    <div>
      <h1>{currentWord}</h1>
      <Alphabet greenLetters={greenLetters} yellowLetters={yellowLetters} blackLetters={blackLetters} />
      <WordGuessForm guess={guess} currentWord={currentWord} setGreenLetters={setGreenLetters} setYellowLetters={setYellowLetters} setBlackLetters={setBlackLetters} setGuess={setGuess} setGuesses={setGuesses} />
      <GuessesDisplay guesses={guesses} greenLetters={greenLetters} yellowLetters={yellowLetters} blackLetters={blackLetters} />
    </div>
  );
}

export default App;