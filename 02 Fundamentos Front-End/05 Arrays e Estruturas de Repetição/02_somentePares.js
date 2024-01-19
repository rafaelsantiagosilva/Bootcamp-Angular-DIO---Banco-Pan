function isPair(number) {
     if (number % 2 == 0) {
          return true;
     } else {
          return false;
     }
}

function generateTenRandomNumbers() {
     let numbers = [];

     for (let i = 0; i < 10; i++) {
          numbers.push(Math.round(Math.random() * 100));
     }

     return numbers;
}

(function main() {
     let numbers = generateTenRandomNumbers();

     numbers.forEach(number => {
          if (isPair(number)) {
               console.log(number);
          }
     });
})();