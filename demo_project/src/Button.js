import { arraySecond, arrayFirst1, arrayRestItems, uusiarray, uusiobject } from './arrays.jsx';
import { o1, o2, o3 } from './class.jsx';
import { fetchData, asynkkiFetch } from './api.jsx';

//import React, { useState } from 'react';
// =>
const {Component, Fragment, useState} = require('react');

export function Button1( props ) {
    return (
		// <React.Fragment>	=> niin yleinen, että tällä on myös lyhyempi muoto <>
        <>      
            <button onClick={() => props.onClickFunc(props.increment)}>
                +{props.increment}
            </button>
       </>
	);
} 

export function Button2( props ) {
	const [counter, setCounter] = useState(42);	    // initti arvo
	const handleClick = () => setCounter(counter+1);

	return (
        <>      
        <button onClick={ handleClick } >   
            Lähtö: 42. Lisää 1, omalla funkkarilla: {counter} 
        </button>
       </>
	);
} 

export function Button3( props ) {
	const handleClick = () => 
    {
        arraySecond();
        arrayFirst1();
        arrayRestItems();
        uusiarray();    //taulukko
        uusiobject();   // objekti
    }

    return (
        <>      
        <button onClick={ handleClick }> Funktiokutsuja  </button>
       </>
	);
} 

export function Button4( props ) {
	const handleClick = () => 
    {
        o1.greet();
        o2.greet();
        o3.greet();
    }

    return (
        <>      
        <button onClick={ handleClick }> Class kutsuja  </button>
       </>
	);
} 

export function Button5( props ) {
    const handleClick = () => 
    {
        asynkkiFetch();
    }

    return (
        <>      
        <button onClick={ fetchData }> Tee api kutsu  </button>
        <button onClick={ handleClick }> Asynkki kutsu  </button>

       </>
	);
} 

//export default Button;