let payMethod = "Dinheiro";
let price = 100;
let installments = 3;

function calculateNewPrice(payMethod, price, installments) {
     let error = "ERRO: Verifique os valores e tente novamente!";

     if (installments == 1) {
          if (payMethod.toLowerCase() == "dinheiro" || payMethod.toLowerCase() == "pix") {
               return "R$" + (price - price * 15 / 100).toFixed(2).replace('.', ',');
          } else if (payMethod.toLowerCase() == "débito") {
               return "R$" + (price - price * 10 / 100).toFixed(2).replace('.', ',');
          } else {
               return error;
          }
     } else if (installments == 2) {
          return 'R$' + price.toFixed(2).replace('.', ',');
     } else if (installments > 2) {
          return "R$" + (price + price * 10 / 100).toFixed(2).replace('.', ',');
     } else {
          return error;
     }
}

console.log("Valor a ser pago: " + calculateNewPrice(payMethod, price, installments));