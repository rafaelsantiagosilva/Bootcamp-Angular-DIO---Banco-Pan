"use strict";


function writeAName(name) {
     console.log("Meu nome é: " + name);
}

(function main() {
     let names = ["José", "João", "Maria"];

     names.forEach(name => {
          writeAName(name);
     });
})();