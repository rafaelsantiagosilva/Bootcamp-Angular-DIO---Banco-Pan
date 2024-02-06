"use strict";
class Character {
    constructor(name, strength) {
        this.name = name;
        this.strength = strength;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
class Player extends Character {
    constructor(warriorClass) {
        super("ícaro", 25);
        this.warriorClass = warriorClass;
        this.spells = ["Fireball", "Dwarf Rage", "Master of Communication"];
    }
}
const characterOne = new Character("Ryu", 120);
const playerCharacter = new Player("Magician");
console.log(characterOne);
