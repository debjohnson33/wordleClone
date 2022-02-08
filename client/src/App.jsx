import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [currentWord, setWord] = useState("");

  useEffect(() => {
    const result = axios.get('/api/getRandomWord')
      .then(res => {
        console.log(res);
        setWord(res.data[0].word);
      })
  }, [""]);

  return (
    <div>
      <h1>{currentWord}</h1>
    </div>
  );
}

export default App;