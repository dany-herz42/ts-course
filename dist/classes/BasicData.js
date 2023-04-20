"use strict";
class BasicData {
    constructor(name, desc, createdAt, createdBy) {
        this.name = name;
        this.desc = desc;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
    }
    get fullYear() {
        return this.createdAt.getFullYear();
    }
    get fullDesc() {
        return `${this.name} ${this.desc}`;
    }
}
class Product extends BasicData {
    constructor(sku, inStock, name, desc, createdAt, createdBy) {
        super(name, desc, createdAt, createdBy);
        this.sku = sku;
        this.inStock = inStock;
    }
    get fullDesc() {
        return `Producto: ${super.fullDesc}`;
    }
    saveOnDatabase() {
        console.log("Saving product...");
    }
}
class Category extends BasicData {
    constructor(name, desc, createdAt, createdBy) {
        super(name, desc, createdAt, createdBy);
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    get fullDesc() {
        return `Category: ${super.fullDesc}`;
    }
    saveOnDatabase() {
        console.log("Saving category...");
    }
}
let productOne = new Product(123, 100, 'iPhone', 'New iPhone', new Date(), 23);
console.log(productOne.fullYear);
console.log(productOne.sku);
let phoneCategory = new Category('Phones', 'Phones category', new Date(), 23);
phoneCategory.addProduct(productOne);
console.log(productOne, phoneCategory);
console.log(productOne.fullDesc);
console.log(phoneCategory.fullDesc);
//# sourceMappingURL=BasicData.js.map