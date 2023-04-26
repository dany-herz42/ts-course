function UpperCase(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const data = {
    target,
    methodName,
  };
  const original = descriptor.get;
  descriptor.get = function () {
    const replace = original?.call(this);
    return typeof replace === "string" ? replace.toUpperCase() : replace;
  };
}

class Person {
  constructor(public name: string, public lastName: string) {}

  @UpperCase
  get fullName() {
    return `${this.name} ${this.lastName}`;
  }
}

const u = new Person("Daniel", "Hernandez");

console.log(u.fullName);

export {}