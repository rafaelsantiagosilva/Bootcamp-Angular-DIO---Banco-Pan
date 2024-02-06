"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
let numArray = concatArray([1, 5], [3, 6]);
let stringArray = concatArray(["Hello", "World"], ["Olá", "Mundo"]);
console.log(numArray);
console.log(stringArray);
