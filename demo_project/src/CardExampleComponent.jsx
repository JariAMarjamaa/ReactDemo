import React /*, { useState }*/ from 'react';
//import kuva from './images/logo.svg';
import { mockTestData } from "./mockData/data";
import axios from "axios";  // npm install axiosnp

import './App.css';

class Form extends React.Component {
    //userNameInput = React.createRef();

    state = { userName: ""};    //initti arvo

    handleSubmit = async (event) => {       // async. koska await get-requestille
        event.preventDefault(); // estä default toiminto, että lisäys triggeröi äksönin aina
    //    console.log("Input Ref: ", this.userNameInput.current.value);   // input elementi sisältö, kun add-klikattu
        console.log("Hae data githubista ja lisää Kortti nimelle: ", this.state.userName); 
        var /*const*/ resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);  // injectoidaan parametri
        //console.log("Resp.data: ", resp.data); 
        resp.data.name = this.state.userName;
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text" 
                    placeholder="GitHub username" 
                    
                    value={this.state.userName}     // tämä luo suoraan kontrollin elementtiin
                    onChange={event => this.setState({userName: event.target.value})}

      //              ref={this.userNameInput} 
                    required/>
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

            {/* ilman key propsia tulee warning, ettei voida yksilöidä elementtejä*/}
            {props.profiles.map(profile => <Card key={profile.id} {...profile}></Card> ) }

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
       //console.log("Card. profile: ", profile);

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

    addNewProfile = (profileData) => {
        console.log("HelpApp. profileData: ", profileData);
        this.setState(prevState => (
            { profiles: [...prevState.profiles, profileData]}
        ));
    }

    render () {
        return(
            <div>
                <div className="header"> {this.props.title} </div>
                <Form onSubmit={this.addNewProfile} />  {/* onSubmit props on function kutsu*/}
                {/* Halutaan, että CardList komponetti luodaan/kutsutaan, 
                    vain, kun uusi kortti on luotu, ei joka kerta*/}
                <CardList profiles= {this.state.profiles}/>
            </div>
        )
    };
}
