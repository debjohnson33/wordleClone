import React from "react";
import styles from "../styles.css";

import LetterTile from "./LetterTile.jsx";

const WordDisplay = ({ guess, greenLetters, yellowLetters, blackLetters, index }) => {
  const className = styles.guesstile;

  return (
    <div className={styles.wordcontainer} key={index}>
      {guess.split("").map((letter, i) => (
        <div className={className} style={{backgroundColor: "white"}} key={i} >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default WordDisplay;