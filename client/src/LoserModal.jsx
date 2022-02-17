import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";

const LoserModal = ({ correctWord }) => {
  return (
    <div className={styles.modal}>
      <h2>Better Luck Next Time!</h2>
      <h3>{correctWord}</h3>
    </div>
  )
};

const Modal = (props) => {
  return (ReactDOM.createPortal(LoserModal, document.getElementById("#LoserModal")));
}

export default LoserModal;