import React, { useState, useEffect } from "react";
import axios from "axios";

import WordGuessForm from "./components/WordGuessForm.jsx";

const App = () => {
  const [currentWord, setWord] = useState("");

  useEffect(() => {
    axios.get('/api/getRandomWord')
      .then(res => {
        console.log(res);
        setWord(res.data[0].word);
      })
  }, [""]);

  return (
    <div>
      <h1>{currentWord}</h1>
      <WordGuessForm currentWord={currentWord} />
    </div>
  );
}

export default App;