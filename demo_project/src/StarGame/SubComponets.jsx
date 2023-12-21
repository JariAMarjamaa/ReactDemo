import React, { useState } from 'react';
import { utils } from "../StarGame/Functions";


//Java function Number muuttaa stringin numeroksi
//Aina käytä kahta sanaa, ettei tule ylikirjoitusta vahingossa

export const PlayNumber = props => {
    // onclick toimii jokaiselle komponentille, koska javascript closureksen
    // jcomplete.com/closures
    // onclick on vain tässä skoopissa => jokaiselle oma
    return (
        <button className="number" onClick={() => console.log('Num', props.number)} > {props.number} </button>
    );
}

export const StartDisplay = props => {

    return (
        <>
        { utils.range(1, props.howManyStars).map(starId =>
            <div key={starId} className="star" />
            )
        }
        </>
    );
}