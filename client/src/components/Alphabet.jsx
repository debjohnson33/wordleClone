import React from "react";

import styles from "../styles.css";
import LetterTile from "./LetterTile.jsx";

const Alphabet = ({greenLetters, yellowLetters, blackLetters}) => {
  // logic to take letters and change the background color
  // for each green letter, change background to green
  // for each yellow letter, change background to yellow
  // for each black letter, change background to black

  // Make letter tile component and pass in letter, background color
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const className = styles.letter;
  return (
    <div>
      <h1>Available letters:</h1>
      <div className={styles.container}>
        {alphabet.map((letter, i) => (
          <LetterTile
            className={className}
            letter={letter}
            bgColor={greenLetters.includes(letter) ? "green" : yellowLetters.includes(letter) ? "yellow" : blackLetters.includes(letter) ? "#6f7272" : "white"}
            i={i}
            color={blackLetters.includes(letter) ? "white" : greenLetters.includes(letter) ? "white" : "black"}
          />
        ))}
      </div>
    </div>
  )
};

export default Alphabet;