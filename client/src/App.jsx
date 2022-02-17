import React, { useState, useEffect } from "react";
import axios from "axios";

import WordGuessForm from "./components/WordGuessForm.jsx";
import Alphabet from "./components/Alphabet.jsx";
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

  useEffect(() => {
    axios.get('/api/getRandomWord')
      .then(res => {
        console.log(res);
        setWord(res.data[0].word);
      })
  }, [""]);

  const renderModal = () => {
    if (win === true) {
      <WinnerModal />
    } else if (lose === true) {
      <LoserModal correctWord={currentWord} />
    } else {
      null
    }
  }

  return (
    <div>
      <Alphabet greenLetters={greenLetters} yellowLetters={yellowLetters} blackLetters={blackLetters} />
      <WordGuessForm guess={guess} currentWord={currentWord} setGreenLetters={setGreenLetters} setYellowLetters={setYellowLetters} setBlackLetters={setBlackLetters} setGuess={setGuess} setWin={setWin} setLose={setLose} />
      {renderModal()}
    </div>
  );
}

export default App;