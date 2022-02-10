import React, { useState } from "react";

import styles from "../styles.css";

const LetterTile = ({ className, letter, bgColor, i }) => {
  return (
    <div className={className} style={{ backgroundColor: bgColor}} key={i} >{letter}</div>
  )
};

export default LetterTile;