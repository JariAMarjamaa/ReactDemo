const [first, second,, fourth] = [10,20,30,40];

// sama =>
const [first1, ...restOfItems] = [100, 200, 300, 400];
const [eka, ...loputNimettyMitenHalutaan] = [1000, 2000, 3000, 4000];

const uusiArray = [...loputNimettyMitenHalutaan];

const uusiObject = {...restOfItems};

export function arraySecond( props ) {
    console.log(second);// 20
};

export function arrayFirst1( props ) {
    console.log(first1); // 100
}; 

export function arrayRestItems( props ) {
    console.log(restOfItems); // taulukko [200, 300, 400]}; 
}

export function uusiarray( props ) {
    console.log("uusiArray: ", uusiArray); 
    console.log("itemi 2: ", uusiArray[2]); 

}

export function uusiobject( props ) {
    console.log("uusiObject: ", uusiObject); 
  //  console.log("Object 2: ", uusiObject{2} ); //EI NÄIN

}

