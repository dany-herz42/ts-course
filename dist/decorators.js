"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Route(route) {
    return (constructor) => {
        console.log("Exec route decorator");
        constructor.prototype.route = route;
    };
}
function Method(method) {
    console.log(method);
    return (target, methodName, descriptor) => {
        console.log(target, methodName, descriptor);
        const original = descriptor.value;
        descriptor.value = function (...args) {
            console.log("Before decorator");
            console.log(original.call(this, ...args));
            console.log("After decorator");
        };
    };
}
let Products = class Products {
    find(message) {
        return `Product 1: ${message}`;
    }
};
__decorate([
    Method("get")
], Products.prototype, "find", null);
Products = __decorate([
    Route("/products")
], Products);
const product = new Products();
product.find("Hello world");
//# sourceMappingURL=decorators.js.map