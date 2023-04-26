function Route(route: string) {
  return (constructor: Function) => {
    console.log("Exec route decorator");
    constructor.prototype.route = route;
  };
}

function Method(method: string) {
  console.log(method);
  return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
    console.log(target, methodName, descriptor);
    const original: Function = descriptor.value;
    descriptor.value = function (...args: any) {
      console.log("Before decorator");
      console.log(original.call(this, ...args));
      console.log("After decorator");
    };
  };
}

@Route("/products")
class Products {
  @Method("get")
  find(message: string) {
    return `Product 1: ${message}`;
  }
}

const product = new Products();

product.find("Hello world");
