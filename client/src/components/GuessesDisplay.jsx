import React from "react";
import styles from "../styles.css";

import WordDisplay from "./WordDisplay.jsx";

const GuessesDisplay = ({ guesses, greenLetters, yellowLetters, blackLetters }) => {
  return (
    <div>
      <h2>Guesses so far:</h2>
      <div className={styles.guessescontainer}>
        {guesses.map((guess, index) => (
          <WordDisplay guess={guess} greenLetters={greenLetters} yellowLetters={yellowLetters} blackLetters={blackLetters} index={index + 100} />
        ))}
      </div>
    </div>
  );
};

export default GuessesDisplay;