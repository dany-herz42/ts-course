interface Animal {
  name: string;
  walk(): void;
  sound(): string;
}

class Horse implements Animal {
  name: string = "Rocinante";

  walk(): void {
    console.log("Walking");
  }

  sound(): string {
    return "hin";
  }
}

class Pig implements Animal {
  name: string = "Porker";

  walk(): void {
    console.log("Walking");
  }

  sound(): string {
    return "oinc";
  }
}
