import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";

const WinnerModal = ({  }) => {
  return (
    <div className={styles.modal}>
      <h2>WINNER!</h2>
    </div>
  )
};

const Modal = (props) => {
  return (ReactDOM.createPortal(WinnerModal, document.getElementById("#WinnerModal")));
}

export default WinnerModal;

