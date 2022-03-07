import React from "react";

import styles from "../styles.css";
import LetterTile from "./LetterTile.jsx";

const Alphabet = ({greenLetters, yellowLetters, blackLetters}) => {
  // logic to take letters and change the background color
  // for each green letter, change background to green
  // for each yellow letter, change background to yellow
  // for each black letter, change background to black

  // Make letter tile component and pass in letter, background color
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const className = styles.letter;
  return (
    <div>
      <h2>Available letters:</h2>
      <div className={styles.container}>
        {alphabet.map((letter, i) => (
          <LetterTile
            className={className}
            letter={letter.toUpperCase()}
            bgColor={greenLetters.includes(letter.toLowerCase()) ? "green" : yellowLetters.includes(letter.toLowerCase()) ? "yellow" : blackLetters.includes(letter.toLowerCase()) ? "#6f7272" : "white"}
            key={i}
            color={blackLetters.includes(letter.toLowerCase()) ? "white" : greenLetters.includes(letter.toLowerCase()) ? "white" : "black"}
          />
        ))}
      </div>
    </div>
  )
};

export default Alphabet;