"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterTwo = void 0;
class Character {
    constructor(id, name, level, hp, profession) {
        this.id = id;
        this.name = name;
        this.level = level;
        this._hp = hp;
        this.profession = profession;
    }
    increaseLevel() {
        this.level += 1;
        return this.level;
    }
    changeHP(quantity) {
        this._hp = quantity;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    set hp(quantity) {
        this._hp += quantity;
    }
}
Character.team = 0;
exports.default = Character;
class CharacterTwo {
    constructor(id, name, level, _hp, profession) {
        this.id = id;
        this.name = name;
        this.level = level;
        this._hp = _hp;
        this.profession = profession;
        console.log(this);
    }
    increaseLevel() {
        this.level += 1;
        return this.level;
    }
    changeHP(quantity) {
        this._hp = quantity;
        return this._hp;
    }
}
exports.CharacterTwo = CharacterTwo;
//# sourceMappingURL=Character.js.map