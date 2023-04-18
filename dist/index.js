"use strict";
let dinosaursExtinction = 76000000;
let favoriteDinosaur = "T-rex";
let areExtincted = true;
function firstFunction(config) {
    return config;
}
let animals = ["horse", "pig", "duck"];
animals.map((animal) => animal.toUpperCase());
let tuple = [1, "ferrari", 2002];
console.log("XL");
const objTest = {
    id: 1,
    name: "Juan",
    size: "XL",
    address: {
        number: "42",
        street: "First avenue",
        country: "Mexico",
    },
};
const arrPersons = [];
console.log(objTest);
const isAdult = (age) => {
    return age >= 18;
};
function isAdultTwo(age) {
    return age >= 18;
}
console.log(isAdult(2));
const launchError = () => {
    throw new Error("Error with never");
};
let score = 45;
score = "hello world";
let instance = { id: 1, state: "alive" };
function sumTwo(n) {
    if (typeof n === "number") {
        return n + 2;
    }
    return parseInt(n) + 2;
}
console.log(sumTwo(2));
console.log(sumTwo('2'));
const product = {
    name: 'soap',
    createdAt: 'yesterday',
    modifiedAt: 'today'
};
const noDeFibo = 2;
function toNumber(n) {
    return !n ? 0 : parseInt(n);
}
toNumber(null);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id,
        name: 'Felipe',
        createdAt: new Date()
    };
}
const user = getUser(-1);
console.log('User created at: ', user === null || user === void 0 ? void 0 : user.createdAt);
const arr = null;
console.log(arr === null || arr === void 0 ? void 0 : arr[0]);
const fnTest = null;
fnTest === null || fnTest === void 0 ? void 0 : fnTest();
const difficulty = null;
const userGame = {
    userName: "Daniel",
    difficulty: difficulty !== null && difficulty !== void 0 ? difficulty : 1
};
const element = null;
const element1 = element;
const input = document.getElementById('username');
const input2 = document.getElementById('username');
console.log(input.value);
function returnValue(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x.toFixed(2);
}
function process(thing) {
    if (typeof thing === "string") {
        return thing.toLocaleLowerCase();
    }
    else if (thing instanceof Number) {
        return thing.toExponential();
    }
    return 0;
}
//# sourceMappingURL=index.js.map