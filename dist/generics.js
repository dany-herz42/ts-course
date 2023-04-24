"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function log(a, b) {
    console.log(a, b);
    return b;
}
log("hello", 32);
log("hello", 32);
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return response.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchData("/user");
        console.log(user.id);
    });
}
class Programmer {
    constructor(t) {
        this.computer = t;
    }
}
const programmerOne = new Programmer({
    turnOn: () => { },
    turnOff: () => { },
});
programmerOne.computer.turnOff();
function fetchProduct() {
    return {
        key: "product1",
        value: { id: "product1" },
    };
}
function fetchStock() {
    return {
        key: "product1",
        value: 500,
    };
}
function print(t) {
    console.log(t);
    return t;
}
print({ id: "user_id", name: "Juan" });
class State {
    constructor() {
        this.data = [];
    }
    add(t) {
        this.data.push(t);
    }
    getState() {
        return this.data;
    }
}
class DeleteState extends State {
    delete(id) {
        this.data = this.data.filter((x) => !(x.id === id));
    }
}
class UserStates extends State {
    resetPassword() {
    }
}
const calendar = { id: 1, source: "Google", owner: "yo" };
function getProp(object, property) {
    return object[property];
}
getProp(calendar, "id");
getProp(calendar, "source");
getProp(calendar, "owner");
const keyVal = {
    'im a string': 42
};
const omitPoint = {
    y: 23
};
const pickPoint = {
    x: 1,
    y: 1
};
const readOnlyPoint = {
    x: 2,
    y: 3,
    desc: 'This is a point'
};
//# sourceMappingURL=generics.js.map