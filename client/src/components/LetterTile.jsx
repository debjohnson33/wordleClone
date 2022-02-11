import React, { useState } from "react";

import styles from "../styles.css";

const LetterTile = ({ className, letter, bgColor, i, color }) => {
  return (
    <div className={className} style={{ backgroundColor: bgColor, color: color}} key={i} >{letter}</div>
  )
};

export default LetterTile;