import React, { useState, useEffect } from 'react';
import { utils, numberStatus } from "./Functions";
import { PlayNumber, StarsDisplay, PlayAgain } from './SubComponets';

import './GameApp.css';

//export const StarMatch = () => {
export const Game = (props) => {    // play again buttoni toimimaan, unmounttaamalla komponentti = resetoi kaikki muuttujat
    //const stars = utils.random(1,9); //6;
    //const [stars,setStars] = useState( utils.random(1,9) ); 
    // Nyt tässä käytetään natiivia Javascript functiota Number => ei toimi, jos oma komponentti samanniminen!
    const [stars,setStars] = useState( utils.random(Number("1"),9) ); 

    // use staten mahdolliset muuttujat --> tallenna vain, mitä oikeasti tarvitaan
    // candidate nums
    // wrong nums -> voidaan laskea kanditaatita, joten ei tarvita stateen turhana
    // used nums      <-> voidaan aloittaa tyhjällä taululla ja täyttää valintoijen mukaan
    // available nums <-> voidaan aloittaa täydellä taululla ja tyhjentään valintojen mukaan
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCanditateNums] = useState([]);

    // mock testi
    //const [availableNums, setAvailableNums] = useState([1,2,3,4,5]);
    //const [candidateNums, setCanditateNums] = useState([2,3]);

    // väärä määrä lasketaan aina, joten sitä ei tarvi erikseen laskea millään set-funtiolla
    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    const gameIsDone = availableNums.length === 0;
  
    const [secondsLeft, setSecondsLeft] = useState(10);
    // StartMatch komponentti renderöidään minimissään joka sekunti
    // setInterval, setTimeout

    useEffect(() => {
      if (secondsLeft > 0 && availableNums.length > 0) {
        const timerId = setTimeout(() => {
          setSecondsLeft(secondsLeft - 1);
        }, 1000);
        return () => clearTimeout(timerId);
      }
    }); 

    const gameStatus = availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active'; 
   
    const resetGame = () => {
      console.log("resetGame");
      
      setStars(utils.random(1, 9));
      setAvailableNums(utils.range(1, 9));
      setCanditateNums([]);
    };

    const onNumberClick = (number, currentStatus) => {
      console.log("Num: ", number, " status: ", currentStatus, " game status: ", gameStatus);


      if (gameStatus !== 'active' || currentStatus === 'used') {
        return;
      }
  
      const newCandidateNums =
        currentStatus === 'available'
          ? candidateNums.concat(number)
          : candidateNums.filter(cn => cn !== number);
  
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
    };

    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            
            {/*
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
            */}
            
            {/* utils.range(1, stars).map(starId =>
              <div key={starId} className="star" />
              )
            */}

             {/* available.length === 0 ... mutta tämä ei ole hyvä tapa => gameIsDone*/}
            {gameStatus !== 'active' ? (                          
          	  <PlayAgain onClick={props.startNewGame/* <= funktio unmounttaan tämän komponentin ja resetoi muuttujat  -> resetGame*/} gameStatus={gameStatus}/>
            ) : (
          	  <StarsDisplay howManyStars={stars} />
            )}

          </div>
          <div className="right">
            
            {/*
            <button className="number">1</button>
            <button className="number">2</button>
            <button className="number">3</button>
            <button className="number">4</button>
            <button className="number">5</button>
            <button className="number">6</button>
            <button className="number">7</button>
            <button className="number">8</button>
            <button className="number">9</button>
            */}
            
            {/* utils.range(1, 9).map(number =>
              <button key={number} className="number"> {number} </button>
              )
            */ }

            {/*
                isCanditate
                isAvailable <= mutta tämä olisi turhan paljon propseja
                => sen sijaan vain numeron status
            */}
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