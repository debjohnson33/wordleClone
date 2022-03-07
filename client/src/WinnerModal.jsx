import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";

const WinnerModal = ({ numGuesses, onQuit }) => {
  return (
    <div className={styles.modal}>
      <div id={styles.winner}>
        <h2>WINNER!</h2>
        <p>You guessed the word in {numGuesses} guesses!</p>
        <button onClick={onQuit}>Close</button>
      </div>
    </div>
  )
};

const Modal = (props) => {
  return (ReactDOM.createPortal(WinnerModal, document.getElementById("#winnerModal")));
}

export default WinnerModal;

