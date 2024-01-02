//import logo from './logo.svg';
import React, { useState } from 'react';

import Profiilikuva from './images/Profiilikuva.jpg';
import { Button1, Button2, Button3, Button4, Button5 }  from './Button.js';
import Display from './Display.js';
import { HelpApp } from "./CardExampleComponent.jsx";
import { testerObj } from './functions.jsx';

import { /*StarMatch,*/ Game  } from "./StarGame/GameApp.jsx";

import './App.css';

function App() {
	const [counter, setCounter] = useState(0); 
	const incrementCounter5 = () => 
  {
    setCounter(counter+5);

    testerObj.func1();
    testerObj.func2();

    const mystery = "answer";
    const InverseOfPI = 1 / Math.PI;

    const obj = {
      p1: 10,
      p2: 20,
      f1: () => {},
      [mystery]: 42,
      InverseOfPI,
      InverseOfPI2: InverseOfPI
    };

    console.log("obj.mystery: ", obj.mystery);  // undefined
    console.log("obj.answer: ", obj.answer);    // 42
    //console.log("obj.InverseOfPI: ", obj.InverseOfPI);
    //console.log("obj.InverseOfPI2: ", obj.InverseOfPI2);

    const circle = {
      label: "circleX",
      radius: 2
  }
    console.log("Ympyrän mitta: ", testerObj.circleArea(circle));
    console.log("Ympyrän mitta, tarkkuus 5: ", testerObj.circleArea(circle, {precision: 5}));
  }

  const incrementCounter = (incrementValue) => 
  {
    console.log("incrementCounter. incrementValue: ", incrementValue);
    setCounter(counter + incrementValue);
  }

  const StarMatch = () => {
    const [gameId, setGameId] = useState(1);  // koska gameid vaihtuu startilla, niin komponentti unmountataan ensin ja kaikki muuttujat resetoidaan
    return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={Profiilikuva} className="App-logo" alt="logo" />
        <p>
          Tikku-Ukon uudet harraste seikkailut
        </p>
      </header>

      ---------------- Peli -------------------

      <div>
        <StarMatch > </StarMatch>
      </div>
      
      ---------------- Kortti -------------------
      <div>
        <HelpApp title="The Github Cards App"> </HelpApp>
      </div>

      <br></br>
      <br></br>

      ---------------- Harjoitteita -------------------
      <div>
        { /* = {} = numero, "" = string */}
        <Button1	onClickFunc={incrementCounter5} increment={5} />	  
        <Button1	onClickFunc={incrementCounter} increment={100} />
        <Display message={counter}/>

        <Button2/>
        <br></br>
        <br></br>

        <Button3/>
        <br></br>
        <Button4/>

        <br></br>
        <br></br>
        <Button5/>

      </div>

      <div>
      </div>
  </div>

  );
}

export default App;
