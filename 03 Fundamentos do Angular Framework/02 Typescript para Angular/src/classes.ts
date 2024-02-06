// Classes

/*
Data Modifiers:
     •private
          -> Só pode ser acessada por dentro da classe
     •public
          -> Pode ser acessado em qualquer lugar
     •protected
          -> Somente dentro da classe e de suas classes filhas
*/

class Character {
	readonly name: string; // Por fora, só pode ler e não pode mudar. É inciado somente no constructor
	strength: number;
	skillLevel?: number; // Atributo opcional

	constructor(name: string, strength: number) {
		this.name = name;
		this.strength = strength;
	}

	attack(): void {
		console.log(`Attack with ${this.strength} points`);
	}
}

class Player extends Character {
     warriorClass: string;
     spells: string[]; 

     constructor(warriorClass: string) {
          super("ícaro", 25);
          this.warriorClass = warriorClass;
          this.spells = ["Fireball", "Dwarf Rage", "Master of Communication"];
     }
}

const characterOne = new Character("Ryu", 120);
const playerCharacter = new Player("Magician");
console.log(characterOne);
