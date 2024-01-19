"use strict";

function ageBiggerThenEighteenVerification(age) {
     if (age < 18) {
          return false;
     } else if (age >= 18) {
          return true;
     } else {
          return "ERRO!";
     }
}

(function main() {
     let age = 19;

     if (ageBiggerThenEighteenVerification(age)) {
          console.log("Você pode dirigir!");
     } else if (!ageBiggerThenEighteenVerification(age)) {
          console.log("Você não pode dirigir!");
     } else {
          console.log("ERRO: Verifique oa dados e tente novamente");
     }
})();