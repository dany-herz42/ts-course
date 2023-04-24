function log<T, V>(a: T, b: V): V {
  console.log(a, b);

  return b;
}

log<string, number>("hello", 32);
log("hello", 32);

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}

type User = {
  id: string;
  name: string;
};

async function main() {
  const user = await fetchData<User>("/user");
  console.log(user.id);
}

// GENERICS IN CLASSES

type Computer = {
  turnOn: () => void;
  turnOff: () => void;
};

class Programmer<T> {
  computer: T;

  constructor(t: T) {
    this.computer = t;
  }
}

const programmerOne = new Programmer<Computer>({
  turnOn: () => {},
  turnOff: () => {},
});

programmerOne.computer.turnOff();

// GENERICS IN INTERFACES

interface KeyValue<T, V> {
  key: T;
  value: V;
}

interface ProductInterface {
  id: string;
}

function fetchProduct(): KeyValue<string, ProductInterface> {
  return {
    key: "product1",
    value: { id: "product1" },
  };
}

function fetchStock(): KeyValue<string, number> {
  return {
    key: "product1",
    value: 500,
  };
}

// CONSTRAINTS

interface UserTest {
  id: string;
}

function print<T extends UserTest>(t: T): T {
  console.log(t);

  return t;
}

print({ id: "user_id", name: "Juan" });

// GENERICS AND INHERITANCE

class State<T> {
  protected data: T[] = [];

  add(t: T): void {
    this.data.push(t);
  }

  getState(): T[] {
    return this.data;
  }
}

type ObjectId = {
  id: string;
};

class DeleteState<T extends ObjectId> extends State<T> {
  delete(id: string) {
    this.data = this.data.filter((x) => !(x.id === id));
  }
}

class UserStates extends State<User> {
  resetPassword() {
    // logic here
  }
}

// KEY OF operator

type Calendar = {
  id: number;
  source: string;
  owner: string;
};

const calendar: Calendar = { id: 1, source: "Google", owner: "yo" };

function getProp<T>(object: T, property: keyof T): unknown {
  return object[property];
}

getProp<Calendar>(calendar, "id");
getProp<Calendar>(calendar, "source");
getProp<Calendar>(calendar, "owner");

// UTILITY TYPES

type Point = {
  x: number;
  y: number;
  desc?: string;
};

type OptionalPoint = Partial<Point>;
type RequiredPoint = Required<Point>;

const keyVal: Record<string, number> = {
  'im a string': 42
};

const omitPoint: Omit<Point, 'desc' | 'x'> = {
  y: 23
}

const pickPoint: Pick<Point, 'x' | 'y'> = {
  x: 1,
  y: 1
}

const readOnlyPoint: Readonly<Point> = {
  x: 2,
  y: 3,
  desc: 'This is a point'
}