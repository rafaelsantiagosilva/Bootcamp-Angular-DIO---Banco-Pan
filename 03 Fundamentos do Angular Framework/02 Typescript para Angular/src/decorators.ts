// Decorator -> Uma função que é executada com base no que está abaixo dela
function ApiVersion(version: string) {
	return (target: any) => {
		Object.assign(target.prototype, { __version: version });
	};
}

function minLength(length: number) {
	// target = valor so atributo, key é o atributo

	return (target: any, key: string) => {
		let _value = target[key];

		const getter = () => _value;
		const setter = (value: string) => {
			if (value.length < length) {
				throw new Error(`Length lower to ${length}`);
			} else {
				_value = value;
			}
		};
	};
}

@ApiVersion("1.10") // Insere uma propriedade na classe API
class Api {
	@minLength(3)
	name: string;

	constructor(name: string) {
		this.name = name;
	}
} // quando essa classe é instanciada

const api = new Api("p");
console.log(api.__version); // Exibindo a propriedade inserida
