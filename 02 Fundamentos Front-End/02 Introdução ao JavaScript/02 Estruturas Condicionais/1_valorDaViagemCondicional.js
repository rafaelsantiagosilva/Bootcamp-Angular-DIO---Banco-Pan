let ethanolPrice = 3.29;
let gasPrice = 7.27;
let typeOfFuel = "GaSoLiNa";
let averageFuelSpendingByKm = 4.36;
let distanceOfTravel = 120;

function calculateValueOfTravel(ethanolPrice, gasPrice, typeOfFuel, averageFuelSpendingByKm, distanceOfTravel) {
     let fuelPrice = verifyFuelPrice(ethanolPrice, gasPrice, typeOfFuel);
     if (fuelPrice == -1 || fuelPrice == undefined || fuelPrice == null) {
          return "ERRO: Algo deu errado! Verifique os valores e tente novamente!";
     } else {
          let travelValue = distanceOfTravel / averageFuelSpendingByKm * fuelPrice;
          return `O preço da viagem será de R$${travelValue.toFixed(2).replace('.', ',')}`;
     }
}

function verifyFuelPrice(ethanolPrice, gasPrice, typeOfFuel) {
     if (typeOfFuel.toUpperCase() === "ETANOL") {
          return ethanolPrice;
     } else if (typeOfFuel.toUpperCase() === "GASOLINA") {
          return gasPrice;
     } else {
          return -1;
     }
}

console.log(calculateValueOfTravel(ethanolPrice, gasPrice, typeOfFuel, averageFuelSpendingByKm, distanceOfTravel));
