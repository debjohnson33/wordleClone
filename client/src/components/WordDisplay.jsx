import React from "react";
import styles from "../styles.css";

import LetterTile from "./LetterTile.jsx";

const WordDisplay = ({ guess, greenLetters, yellowLetters, blackLetters, index }) => {
  const className = styles.guesstile;

  return (
    <div className={styles.wordcontainer} key={index}>
      {guess.split("").map((letter, i) => (
        <LetterTile className={className} letter={letter} bgColor={greenLetters.includes(letter) ? "green" : yellowLetters.includes(letter) ? "yellow" : blackLetters.includes(letter) ? "black" : "white"} i={i + 300} />
      ))}
    </div>
  );
};

export default WordDisplay;