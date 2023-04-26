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

function Min(min: number) {
  return (target: any, propertyName: string) => {
    let val: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return val;
      },
      set(v: string) {
        if (v.length < min) {
          throw new Error(`The ${propertyName} property must have a minimum length of 6`);
        }

        val = v;
      },
    }

    Object.defineProperty(target, propertyName, descriptor);
  }
}
class Person {

  @Min(6)
  public password: string;

  constructor(public name: string, public lastName: string, password: string) {
    this.password = password;
  }

  @UpperCase
  get fullName() {
    return `${this.name} ${this.lastName}`;
  }
}

const u = new Person("Daniel", "Hernandez","123456");

console.log(u.password);

export {}