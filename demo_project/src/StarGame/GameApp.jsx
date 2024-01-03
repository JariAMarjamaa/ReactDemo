import React, { useState, useEffect } from 'react';
import { utils, numberStatus } from "./Functions";
import { PlayNumber, StarsDisplay, PlayAgain } from './SubComponets';

import './GameApp.css';

// Custom Hook
const useGameState = () => {         //useABC ... voidaan nimetä miten halutaan, mutta hyvä tapa aloittaa use:lla, koska staten hanskausta
  const [stars,setStars] = useState( utils.random(Number("1"),9) ); 
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCanditateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10); 

  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

  // custom setteri
  const setGameState = (newCandidateNums) => {
    if (utils.sum(newCandidateNums) !== stars) {
      setCanditateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCanditateNums([]);
    }
  }

  return { stars, availableNums, candidateNums, secondsLeft, setGameState };
}

export const Game = (props) => {    // play again buttoni toimimaan, unmounttaamalla komponentti = resetoi kaikki muuttujat
    const { stars, availableNums, candidateNums, secondsLeft, setGameState } = useGameState();

    // väärä määrä lasketaan aina, joten sitä ei tarvi erikseen laskea millään set-funtiolla
    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    const gameStatus = availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active'; 
   
    const onNumberClick = (number, currentStatus) => {
      console.log("Num: ", number, " status: ", currentStatus, " game status: ", gameStatus);

      if (gameStatus !== 'active' || currentStatus === 'used') {
        return;
      }
  
      const newCandidateNums =
        currentStatus === 'available'
          ? candidateNums.concat(number)
          : candidateNums.filter(cn => cn !== number);
      
      setGameState(newCandidateNums);
    };

    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">

            {gameStatus !== 'active' ? (                          
          	  <PlayAgain onClick={props.startNewGame/* <= funktio unmounttaan tämän komponentin ja resetoi muuttujat  -> resetGame*/} gameStatus={gameStatus}/>
            ) : (
          	  <StarsDisplay howManyStars={stars} />
            )}

          </div>
          <div className="right">
            
            { utils.range(1, 9).map(number =>
              <PlayNumber
                key={number} 
                number={number}
                status={numberStatus(number,availableNums,candidateNums,candidatesAreWrong)}
                onClick={onNumberClick}>
              </PlayNumber>
              )
            }

          </div>
        </div>
        <div className="timer">Time Remaining: {secondsLeft}</div>
      </div>
    );
  };