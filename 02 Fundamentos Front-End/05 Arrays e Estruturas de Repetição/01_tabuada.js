function printMultiplicationTable(number) {
     for (let i = 0; i <= 10; i++) {
          console.log(`${number} x ${i} = ${i * number}`);
     }
}

(function main() {
     let number = 1;
     printMultiplicationTable(number);
})();

