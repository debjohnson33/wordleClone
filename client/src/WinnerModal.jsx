import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";

const WinnerModal = ({ numGuesses, onQuit }) => {
  return (
    <div className={styles.modal}>
      <h2>WINNER!</h2>
      <p>You guessed the word in {numGuesses} guesses!</p>
      <button onClick={onQuit}>Close</button>
    </div>
  )
};

const Modal = (props) => {
  return (ReactDOM.createPortal(WinnerModal, document.getElementById("#WinnerModal")));
}

export default WinnerModal;

