import React, { useState, useEffect } from "react";
import axios from "axios";

import WordGuessForm from "./components/WordGuessForm.jsx";
import Alphabet from "./components/Alphabet.jsx";
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
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(true);

  useEffect(() => {
    axios.get('/api/getRandomWord')
      .then(res => {
        console.log(res);
        setWord(res.data[0].word);
      })
  }, [""]);

  const renderModal = () => {
    // win is true
    //  return winnerModal
    // lose is true
    //  return loserModal
  }

  return (
    <div>
      <Alphabet greenLetters={greenLetters} yellowLetters={yellowLetters} blackLetters={blackLetters} />
      <WordGuessForm guess={guess} currentWord={currentWord} setGreenLetters={setGreenLetters} setYellowLetters={setYellowLetters} setBlackLetters={setBlackLetters} setGuess={setGuess} setWin={setWin} win={win} setLose={setLose} lose={lose} />
      {renderModal()}
    </div>
  );
}

export default App;