import React, { useState } from 'react';
import { utils } from "./Functions";
import { PlayNumber, StartDisplay } from './SubComponets';

import './GameApp.css';

export const StarMatch = () => {
    
    //const stars = utils.random(1,9); //6;
    //const [stars,setStars] = useState( utils.random(1,9) ); 
    // Nyt tässä käytetään natiivia Javascript functiota Number => ei toimi, jos oma komponentti samanniminen!
    const [stars,setStars] = useState( utils.random(Number("1"),9) ); 

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

            <StartDisplay howManyStars={stars} ></StartDisplay>
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

            { utils.range(1, 9).map(number =>
              <PlayNumber key={number} number={number}></PlayNumber>
              )
            }


          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };

  // Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};