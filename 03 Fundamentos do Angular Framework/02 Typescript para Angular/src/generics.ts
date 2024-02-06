// Generics
function concatArray<Type>(...itens: Type[]): Type[] {
	return new Array().concat(...itens);
}

let numArray = concatArray<number[]>([1, 5], [3, 6]); // any type
let stringArray = concatArray<string[]>(["Hello", "World"], ["Olá", "Mundo"]); // any type

console.log(numArray);
console.log(stringArray);
