import React from "react";

const GuessResult = ({numGuesses, win}) => {
  return (
    (win === true) ? <h2>You have guessed {numGuesses} times and you WON!</h2> : <h2>You have guessed {numGuesses} times. You have {8 - numGuesses} left</h2>
  )
}

export default GuessResult;