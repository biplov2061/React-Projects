import React, { useState } from 'react';
import LandingPage from './components/LandingPage.js';
import GamePage from './components/GamePage.js';

export default function App() {
  const [IsGameStarted , setIsGameStarted] = useState(false);
  const toggleGamePlay = () =>{
     setIsGameStarted((prev) => !prev);
  }

  const [score , setScore] = useState(0);

  const addScore = () =>{
    setScore(score + 1);
  }

  const reset = () =>{
   setScore(0);
   setFinalDiceRollValue(0);
   setUserInputValue(0);
  }

const [visible , setVisible] = useState(false);
const [gameRules , setGameRules] = useState('');


const diceGameReset = () =>{
    setGameRules('How to play dice : 1. choose the number 2. click the dice');
    setVisible(true);
}

// holds the random dice roll value


// show error message if user not selected a number
const [ErrVisible , setErrVisible] = useState(false);
const [ErrMessage , setErrMessage] = useState('');


// handles  isuser inputted value or not 
const [IsUserInputted , setIsUserInputted] = useState(false);
const [userInputValue , setUserInputValue] = useState(0);
const [prevDiceRollValue , setPrevDiceRollValue] = useState();
const [finalDiceRollValue , setFinalDiceRollValue] = useState(0);

const userInput = (value) =>{
 setUserInputValue(value);
  console.log(value);
  if(!IsUserInputted)
  {
     setIsUserInputted(true);
     setErrVisible(false);
  }
  
}

let diceRolled = 0;
const showDiceValue = () =>{
  
   if(IsUserInputted){
    diceRolled = (Math.floor(Math.random() *6) + 1);
      setPrevDiceRollValue(diceRolled);
      setFinalDiceRollValue(prevDiceRollValue);
      console.log(prevDiceRollValue);
      if(userInputValue === prevDiceRollValue){
          addScore();
      }
      setIsUserInputted(false);
   }
   else
   {
      setErrVisible(true);
      setErrMessage('***Please select your dice guess***');
   }
}



  return (
    <>{IsGameStarted ? <GamePage prevDiceRoll={prevDiceRollValue} diceRollValue={finalDiceRollValue} userInputValue={userInputValue} ErrMessage={ErrMessage} ErrVisible={ErrVisible} userInput={userInput}  showDiceValue={showDiceValue} diceGameReset={diceGameReset} visible={visible} gameRules={gameRules} total_score={score} resetScore={reset}   /> : <LandingPage toggle={toggleGamePlay}/>}
    </>
  
  );
}
