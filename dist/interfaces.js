"use strict";
class Horse {
    constructor() {
        this.name = "Rocinante";
    }
    walk() {
        console.log("Walking");
    }
    sound() {
        return "hin";
    }
}
class Pig {
    constructor() {
        this.name = "Porker";
    }
    walk() {
        console.log("Walking");
    }
    sound() {
        return "oinc";
    }
}
class Dictionary {
}
const newDictionary = new Dictionary();
newDictionary['1a'] = 'user 1';
newDictionary['2a'] = 'user 2';
console.log(newDictionary);
//# sourceMappingURL=interfaces.js.map