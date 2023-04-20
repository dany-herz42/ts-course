"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importStar(require("./classes/Character"));
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
const characterOne = new Character_1.default(1, "juan", 2, 34);
characterOne.hp = 20;
console.log(characterOne);
const charTwo = new Character_1.CharacterTwo(2, "pedro", 3, 44);
//# sourceMappingURL=index.js.map