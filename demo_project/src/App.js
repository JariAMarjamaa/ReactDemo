//import logo from './logo.svg';
import React, { useState } from 'react';

import Profiilikuva from './images/Profiilikuva.jpg';
import { Button1, Button2 }  from './Button.js';
import Display from './Display.js';

import './App.css';

function App() {
	const [counter, setCounter] = useState(0); 
	const incrementCounter5 = () => 
  {
    setCounter(counter+5);
  }

  const incrementCounter = (incrementValue) => 
  {
    setCounter(counter + incrementValue);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={Profiilikuva} className="App-logo" alt="logo" />
        <p>
          Tikku-Ukon uudet harraste seikkailut
        </p>
      </header>

      <div>
        { /* = {} = numero, "" = string */}
        <Button1	onClickFunc={incrementCounter5} increment={5} />	  
        <Button1	onClickFunc={incrementCounter} increment={100} />
        <Display message={counter}/>

        <Button2/>
      </div>
  </div>

  );
}

export default App;
