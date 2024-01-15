let weight = 69;
let height = 1.70;

function imcVerification(imcValue) {
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

function calculateImc(weight, height) {
     return weight / height ** 2;
}

console.log(`O seu IMC é de ${calculateImc(weight, height).toFixed(2).replace('.', ',')}. Portanto seu nível é de: ${imcVerification(calculateImc(weight, height))}`);