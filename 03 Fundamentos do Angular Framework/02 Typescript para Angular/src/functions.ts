// Funcões
function addNumber(x: number, y: number): number {
	return x + y;
}

function addToHello(name: string): string {
	return `Hello ${name}!`;
}

function callToPhone(phone: number | string): number | string {
	return phone;
}

let soma: number = addNumber(4, 7);
console.log(addToHello("Rafa"));
console.log(callToPhone(123456789));


