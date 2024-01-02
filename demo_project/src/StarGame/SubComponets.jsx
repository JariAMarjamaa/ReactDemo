import React, { useState } from 'react';
import { utils } from "../StarGame/Functions";

// Color Theme
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};

//Java function Number muuttaa stringin numeroksi
//Aina käytä kahta sanaa, ettei tule ylikirjoitusta vahingossa

export const PlayNumber = props => {
    // onclick toimii jokaiselle komponentille, koska javascript closureksen
    // jcomplete.com/closures
    // onclick on vain tässä skoopissa => jokaiselle oma
    return (
        <button
            className="number" 
            style={{ backgroundColor: colors[props.status] }}   // väri valitaan colors taulusta propsin arvon mukaan
            onClick={() => props.onClick(props.number, props.status)}> 
                {props.number} 
        </button>
    );
}

export const StarsDisplay = props => {

    return (
        <>
        { utils.range(1, props.howManyStars).map(starId =>
            <div key={starId} className="star" />
            )
        }
        </>
    );
}