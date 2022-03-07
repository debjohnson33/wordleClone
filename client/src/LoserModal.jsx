import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";

const LoserModal = ({ correctWord, onQuit }) => {
  return (
    <div className={styles.modal}>
      <div id={styles.loser}>
        <h2>Better Luck Next Time!</h2>
        <h3>The word was {correctWord}</h3>
        <button onClick={onQuit}>Close</button>
      </div>
    </div>
  )
};

const Modal = (props) => {
  return (ReactDOM.createPortal(LoserModal, document.getElementById("#loserModal")));
}

export default LoserModal;