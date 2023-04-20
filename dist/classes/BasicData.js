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
}
class Product extends BasicData {
    constructor(sku, inStock, name, desc, createdAt, createdBy) {
        super(name, desc, createdAt, createdBy);
        this.sku = sku;
        this.inStock = inStock;
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
}
let productOne = new Product(123, 100, 'iPhone', 'New iPhone', new Date(), 23);
console.log(productOne.fullYear);
console.log(productOne.sku);
let phoneCategory = new Category('Phones', 'Phones category', new Date(), 23);
console.log(phoneCategory.products);
phoneCategory.addProduct(productOne);
console.log(phoneCategory.products);
//# sourceMappingURL=BasicData.js.map