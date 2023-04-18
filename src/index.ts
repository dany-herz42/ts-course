// ####### SECTION 1: Basic types
/*
  JS types

  * number
  * string
  * boolean
  * undefined
  * null
  * object
  * function
  
  TS types

  * any
  * unknown
  * never
  * arrays
  * tuplas
  * enums
  * INFERRED TYPES
*/

// TYPES AND INFERRED TYPES

let dinosaursExtinction: number = 76_000_000;
let favoriteDinosaur: string = "T-rex";
let areExtincted = true;

function firstFunction(config: any) {
  // do not use any
  return config;
}

// ARRAYS

let animals: string[] = ["horse", "pig", "duck"];

animals.map((animal) => animal.toUpperCase()); // autocompletion suggests datatype methods

// TUPLES

let tuple: [number, string, number] = [1, "ferrari", 2002];

// ENUM

const enum Sizes {
  Small = "s",
  Medium = "m",
  Large = "L",
  ExtraLarge = "XL",
}

console.log(Sizes.ExtraLarge);

// Objetos

type Address = { number: string; street: string; country: string };

type Person = {
  readonly id: number;
  name?: string;
  size?: Sizes;
  address?: Address;
};

const objTest: Person = {
  id: 1,
  name: "Juan",
  size: Sizes.ExtraLarge,
  address: {
    number: "42",
    street: "First avenue",
    country: "Mexico",
  },
};

const arrPersons: Person[] = [];

console.log(objTest);

// FUNCTIONS

const isAdult: (age: number) => boolean = (age: number) => {
  return age >= 18;
};

function isAdultTwo(age: number): boolean {
  return age >= 18;
}

console.log(isAdult(2));

// NEVER

const launchError: () => never = () => {
  throw new Error("Error with never");
};

// ####### SECTION 2: Advanced types

// Union type

let score: number | string = 45;

score = "hello world";

type Animal = {
  id: number;
  state: string;
};

type User = {
  id: number;
  name: string;
};

let instance: User | Animal = { id: 1, state: "alive" };

function sumTwo(n: number | string): number {
  if (typeof n === "number") {
    return n + 2
  }
  return parseInt(n) + 2
}

console.log(sumTwo(2));
console.log(sumTwo('2'));

// INTERSECTION TYPE

type Audit = {
  createdAt: string,
  modifiedAt?: string
}

type Product = {
  name: string
}

const product: Audit & Product = {
  name: 'soap',
  createdAt: 'yesterday',
  modifiedAt: 'today'
}

// LITERAL TYPES

type Fibo = 0 | 1 | 2 | 3 | 5;

const noDeFibo: Fibo = 2

// NULLABLE TYPES

function toNumber(n: string | null) {
  return !n ? 0 : parseInt(n)
}

toNumber(null);

// OPTIONAL CHAINING

function getUser(id: number) {
  if (id < 0) {
    return null
  }

  return {
    id,
    name: 'Felipe',
    createdAt: new Date()
  }
}

const user = getUser(-1);

console.log('User created at: ', user?.createdAt);

const arr: null = null;

console.log(arr?.[0]);

const fnTest: any = null;

fnTest?.();

// NULLISH COALESCING OPERATOR

const difficulty: number | null = null;

const userGame = {
  userName: "Daniel",
  difficulty: difficulty ?? 1
}

// TYPE ASSERTION

const element: any = null;

const element1 = element as number;

const input = document.getElementById('username') as HTMLInputElement;
const input2 = <HTMLInputElement> document.getElementById('username') as HTMLInputElement;

console.log(input.value)

// TYPE NARROWING

function returnValue(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase()
  }

  return x.toFixed(2);
}

// TYPE UNKNOWN

function process(thing: unknown) {
  if (typeof thing === "string") {
    return thing.toLocaleLowerCase()
  } else if (thing instanceof Number) {
    return thing.toExponential()
  }
  return 0;
}