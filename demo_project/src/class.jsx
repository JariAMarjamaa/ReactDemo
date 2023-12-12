class Person {
    constructor(name){
        this.name = name;
    }

    greet() {
        console.log(`Person: ${this.name}`);    //hox `` täytyy käyttä ko merkkejä, kun interpoloidaan dollarilla
    }
}

class Student extends Person {
    constructor(name, level){
        super(name);
        this.level = level;
    }

    greet() {
        console.log(`Student: ${this.name} from ${this.level}`);
    }
}

export const o1 = new Person("Eka persoona");
export const o2 = new Student("Eka Student", "Level 1");
export const o3 = new Student("Toka Student", "Level 2");
o3.greet = () => console.log("Level 3n erikois terveiset");
