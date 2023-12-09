function Display(props) {	    // <= ei tarvi olla nimetty juuri props, mutta yleisesti käytetty tapa: props sisältää kaikki attribuutit
	return (
		<div> {props.message} </div>
	);
}

export default Display;