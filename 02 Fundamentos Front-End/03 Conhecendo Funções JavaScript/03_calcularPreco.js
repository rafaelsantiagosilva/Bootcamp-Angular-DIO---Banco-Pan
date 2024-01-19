"use strict";

function formatValueInCurrency(currency, value) {
     return currency + value.toFixed(2).replace('.', ',');
}

function calculateNewPrice(payMethod, price, installments) {
     let error = "ERRO: Verifique os valores e tente novamente!";

     if (installments == 1) {
          if (payMethod.toLowerCase() == "dinheiro" || payMethod.toLowerCase() == "pix") {
               return formatValueInCurrency("R$", (price - price * 15 / 100));
          } else if (payMethod.toLowerCase() == "débito") {
               return formatValueInCurrency("R$", (price - price * 10 / 100));
          } else {
               return error;
          }
     } else if (installments == 2) {
          return formatValueInCurrency('R$', price);
     } else if (installments > 2) {
          return formatValueInCurrency("R$", (price + price * 10 / 100));
     } else {
          return error;
     }
}

(function main() {
     let payMethod = "Dinheiro";
     let price = 100;
     let installments = 3;

     console.log("Valor a ser pago: " + calculateNewPrice(payMethod, price, installments));
})();