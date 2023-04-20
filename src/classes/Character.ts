export default class Character {
  readonly id: number;
  name: string;
  level: number;
  private _hp: number;
  profession?: string;

  static team = 0;

  constructor(
    id: number,
    name: string,
    level: number,
    hp: number,
    profession?: string
  ) {
    this.id = id;
    this.name = name;
    this.level = level;
    this._hp = hp;
    this.profession = profession;
  }

  increaseLevel(): number {
    this.level += 1;
    return this.level;
  }

  changeHP(quantity: number): number {
    this._hp = quantity;
    return this._hp;
  }

  // GETTERS and SETTERS

  get hp(): number {
    return this._hp;
  }

  set hp(quantity: number) {
    this._hp += quantity;
  }
}

export class CharacterTwo {
  constructor(
    public readonly id: number,
    public name: string,
    public level: number,
    private _hp: number,
    public profession?: string
  ) {
    console.log(this);
  }

  increaseLevel(): number {
    this.level += 1;
    return this.level;
  }

  changeHP(quantity: number): number {
    this._hp = quantity;
    return this._hp;
  }
}
