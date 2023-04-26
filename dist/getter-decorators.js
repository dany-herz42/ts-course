"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function UpperCase(target, methodName, descriptor) {
    const data = {
        target,
        methodName,
    };
    const original = descriptor.get;
    descriptor.get = function () {
        const replace = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof replace === "string" ? replace.toUpperCase() : replace;
    };
}
class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.name} ${this.lastName}`;
    }
}
__decorate([
    UpperCase
], Person.prototype, "fullName", null);
const u = new Person("Daniel", "Hernandez");
console.log(u.fullName);
//# sourceMappingURL=getter-decorators.js.map