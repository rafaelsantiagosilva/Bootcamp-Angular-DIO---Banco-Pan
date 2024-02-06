// Tipos primitivos
let on: boolean = false;
let adressIp: string = "0202ew40t952pefa2340kf203";
let age: number = 29;
let weight: number = 2.34;

// Null e undefined
let nothing: null = null;
let notDefined: undefined = undefined;

// Any
let anything: any = "1";
anything = 1;
anything = true;

// Retorno void
function voidReturn(): void {
	console.log("sou sem retorno!");
}

// Object
let anyObject: object = {
	name: "felipe",
	city: "sp",
	age: 30,
};

// Types
type ProdutoLoja = {
	nome: string;
	preco: number;
	unidades: number;
};

let meuProduto: ProdutoLoja = {
	nome: "Tênis",
	preco: 89.99,
	unidades: 5,
};

// Arrays
let dados: string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

// Aceita um tipo e outro
let infos: (string | number)[] = ["felipe", 30, "ana", 22];

// Tuplas -> Tamanho e ordem de tipos
let boleto: [string, number, number] = ["agua", 22, 14.5];

// Datas
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
