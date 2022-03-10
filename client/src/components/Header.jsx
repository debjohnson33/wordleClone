import React from "react";
import FocusTrap from "focus-trap-react";
import RulesModal from "../RulesModal.jsx";
import useModal from "../useModal.js";
import styles from "../styles.css";

const Header = () => {
  const {isShowing, toggle} = useModal();
  return (
      <div className={styles.header}>
        <ul>
          <li><h1>Wordle Clone</h1></li>
          <li><button id={styles.rules} onClick={toggle}><h2>Rules</h2></button></li>
        </ul>
        <FocusTrap active={isShowing}>
          <RulesModal isShowing={isShowing} hide={toggle}/>
        </FocusTrap>
      </div>
  );
};

export default Header;