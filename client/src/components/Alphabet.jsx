import React from "react";

import styles from "../styles.css";

const Alphabet = () => {
  return (
    <div>
      <h1>Available letters:</h1>
      <div className={styles.container}>
        <div className={styles.letter} id="A">A</div>
        <div className={styles.letter} id="B">B</div>
        <div className={styles.letter} id="C">C</div>
        <div className={styles.letter} id="D">D</div>
        <div className={styles.letter} id="E">E</div>
        <div className={styles.letter} id="F">F</div>
        <div className={styles.letter} id="G">G</div>
        <div className={styles.letter} id="H">H</div>
        <div className={styles.letter} id="I">I</div>
        <div className={styles.letter} id="J">J</div>
        <div className={styles.letter} id="K">K</div>
        <div className={styles.letter} id="L">L</div>
        <div className={styles.letter} id="M">M</div>
        <div className={styles.letter} id="N">N</div>
        <div className={styles.letter} id="O">O</div>
        <div className={styles.letter} id="P">P</div>
        <div className={styles.letter} id="Q">Q</div>
        <div className={styles.letter} id="R">R</div>
        <div className={styles.letter} id="S">S</div>
        <div className={styles.letter} id="T">T</div>
        <div className={styles.letter} id="U">U</div>
        <div className={styles.letter} id="V">V</div>
        <div className={styles.letter} id="W">W</div>
        <div className={styles.letter} id="X">X</div>
        <div className={styles.letter} id="Y">Y</div>
        <div className={styles.letter} id="Z">Z</div>
      </div>

    </div>
  )
};

export default Alphabet;