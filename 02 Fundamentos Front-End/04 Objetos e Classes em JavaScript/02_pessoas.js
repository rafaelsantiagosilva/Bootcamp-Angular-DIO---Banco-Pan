class Person {
     constructor(name, weigth, height) {
          this.name = name;
          this.weigth = weigth;
          this.height = height;
          this.imc = weigth / Math.pow(height, 2);
          this.levelImc = this.imcVerification(this.imc);
     }

     sayThisImcValue() {
          console.log(`Olá! Meu nome é ${this.name} e meu IMC é de ${this.imc.toFixed(2)}`);
     }

     imcVerification(imcValue) {
          if (imcValue >= 0 && imcValue < 18.5) {
               return "abaixo do peso";
          } else if (imcValue >= 18.5 && imcValue < 25) {
               return "peso normal";
          } else if (imcValue >= 25 && imcValue < 30) {
               return "acima do peso";
          } else if (imcValue >= 30 && imcValue < 40) {
               return "obeso";
          } else if (imcValue >= 40) {
               return "obesidade grave";
          } else {
               return "ERRO: Verifique os dados e tente novamente!";
          }
     }
}

const JOSE = new Person("José", 70.0, 1.75);
JOSE.sayThisImcValue();
console.log(JOSE.levelImc);
