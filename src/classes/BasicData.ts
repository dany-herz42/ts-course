class BasicData {
  constructor(
    public name: string,
    public desc: string,
    public createdAt: Date,
    public createdBy: number
  ) {}

  get fullYear(): number {
    return this.createdAt.getFullYear();
  }
}

class Product extends BasicData {
  constructor(
    public sku: number,
    public inStock: number,
    name: string,
    desc: string,
    createdAt: Date,
    createdBy: number
  ) {
    super(name, desc, createdAt, createdBy);
  }
}

class Category extends BasicData {

  public products: Product[] = []

  constructor(
    name: string,
    desc: string,
    createdAt: Date,
    createdBy: number
  ) {
    super(name, desc, createdAt, createdBy);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }
}

let productOne = new Product(123, 100, 'iPhone', 'New iPhone', new Date(), 23);

console.log(productOne.fullYear);
console.log(productOne.sku)

let phoneCategory = new Category('Phones', 'Phones category', new Date(), 23);

phoneCategory.addProduct(productOne);

console.log(productOne, phoneCategory);