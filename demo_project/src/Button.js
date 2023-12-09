import React, { useState } from 'react';

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
            Oma handleri: {counter} 
        </button>
       </>

	);
} 

//export default Button;