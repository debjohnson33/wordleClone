import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";

const RulesModal = ({isShowing, hide, handleKeyPress }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <div className={styles.modal}>
        <div id={styles.rulesModal}>
          <h2>Wordle Clone Rules</h2>
          <ul>
            <li>The goal of the game is to form a word that is 5 letters long.</li>
            <li>You have 8 guesses to get the word</li>
            <li>If your guess is not a word, an alert will come up and tell you. This guess will not count toward the 8 guesses</li>
          </ul>
          <button onClick={hide} onKeyPress={handleKeyPress} >Close</button>
        </div>
      </div>
    </React.Fragment>, document.body
  ) : null;

export default RulesModal;