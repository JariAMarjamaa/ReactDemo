import React, { useState } from 'react';
import kuva from './images/logo.svg';
import { mockTestData } from "./mockData/data";

import './App.css';

//Extendaus tekee app:sta varsinaisen react componentin
class Card extends React.Component {

    render () {
        
        const profile = mockTestData[0];
        
        return ( 
            // css-style sheetin sijaan, voidaan käyttää myös inline tyyli-propsia,
            //jolle annetaan parametriksi javascript objekt, joka sisältää json-elementtejä
            <div className="github-profile" style={{margin: "1rem"}}> 
                Class-Card:
                <img src={profile.avatar_url} alt="profilePicture"></img>
                <div className="info">
                    <div className="name" style={{ color: Math.random() < 0.5 ? 'green': 'red' }}>
                        {profile.name}
                    </div>
                    <div className="company">
                        {profile.company}
                    </div>
                </div>
            </div>
    )};
}

export class HelpApp extends React.Component {
    // constructor
    // this

    render () {
        return(
            <div>
                Class HelpApp:
                <div className="header"> {this.props.title} </div>
                <CardList/>
            </div>
        )};
}

const CardList = (props) => {
    <div>
        Function CardList:
        <Card>

        </Card>
    </div>
}