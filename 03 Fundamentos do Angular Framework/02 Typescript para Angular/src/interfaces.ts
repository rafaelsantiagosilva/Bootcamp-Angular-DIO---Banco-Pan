// Interfaces
interface teste1 {
	readonly name: string; // Só pode ser mexido no momento da criação do objeto
	age: number;
}

type teste2 = {
	readonly name: string; // Só pode ser mexido no momento da criação do objeto
	age: number;
};

let teste1Type: teste2;

class TesteInterfaceTeste implements teste1 {
	public name: string;
	public age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

const teste1Obj = new TesteInterfaceTeste("Testando", 1010101);
