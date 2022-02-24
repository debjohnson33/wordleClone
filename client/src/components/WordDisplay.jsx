import React from "react";
import styles from "../styles.css";

import LetterTile from "./LetterTile.jsx";

const WordDisplay = ({ guess, index }) => {
  const className = styles.guesstile;

  return (
    <div className={styles.wordcontainer} key={index}>
      {guess.map((el, i) => {
        return <LetterTile className={className} letter={el.letter.toUpperCase()} bgColor={el.bgColor} i={i} color={el.color} />
      })}
    </div>
  );
};

export default WordDisplay;