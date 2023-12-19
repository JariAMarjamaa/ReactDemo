import React /*, { useState }*/ from 'react';
//import kuva from './images/logo.svg';
import { mockTestData } from "./mockData/data";

import './App.css';

class Form extends React.Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder="GitHub username"/>
                <button>Add card</button>
            </form>
        );
    }
}

const CardList = (props) => {
    return ( 
        <div>
            {/* instassi 1}
            <Card
                avatar_url={mockTestData[0].avatar_url} 
                name={mockTestData[0].name} 
                company={mockTestData[0].company}>
            </Card> 
            
            {// instassi 2}
            <Card { ...mockTestData[1]}></Card>

            */}

            {/* mockTestData on clobal muuttuja
                map loopin sisään kaikki
                mockTestData.map(profile => <Card {...profile}></Card> ) */}

            {props.profiles.map(profile => <Card {...profile}></Card> ) }

            {/*=> [ <Card/>, <Card/>, <Card/>] */}
            {/*=> [ React.createElement(), React.createElement(), React.createElement()] */}
        </div>
    );
}

//Extendaus tekee Card:sta varsinaisen react componentin
class Card extends React.Component {

    render () {
        
       // const profile = mockTestData[0]; => this.props
       const profile = this.props;

        return ( 
            // css-style sheetin sijaan, voidaan käyttää myös inline tyyli-propsia,
            //jolle annetaan parametriksi javascript objekt, joka sisältää json-elementtejä
            <div className="github-profile" style={{margin: "1rem"}}> 
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
    // constructor => kutsutaan aina, kun komponentti instassi luodaan/kutsutaan
    constructor(props) {
        super(props);       // javescript funktio, joka pitää lisätä jotta HelpApp class linkittyy classiin, 
        this.state = {      // mistä se on extendattu => muuten tulee virhe
            profiles: mockTestData
        };    
    }
    // this

    render () {
        return(
            <div>
                <div className="header"> {this.props.title} </div>
                <Form />
                {/* Halutaan, että CardList komponetti luodaan/kutsutaan, 
                    vain, kun uusi kortti on luotu, ei joka kerta*/}
                <CardList profiles= {this.state.profiles}/>
            </div>
        )
    };
}
