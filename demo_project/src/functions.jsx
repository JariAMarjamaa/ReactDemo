//const PI = Math.PI;
//const E = Math.E;
//const SQRT2 = Math.SQRT2;

// sama kuin
const { PI, E, SQRT2 } = Math;


export const testerObj = {
    func1: function () {
        console.log('F1', this);
    },

    func2: () => {
        console.log("F2", this);
    },

    // precision optionaalinen, default arvo = 2
    circleArea: ({radius}, {precision = 2} = {}) => {
        console.log("circleArea. radius: ", radius);
        return (PI * radius * radius).toFixed(precision);
    }
};