let gasPrice = 7.27;
let averageGasolineSpendingByKm = 4.36;
let distance = 134;

console.log(`\nPara realizar está viagem será necessário R$${calculateValueOfTravel(gasPrice, averageGasolineSpendingByKm, distance)}`);

function calculateValueOfTravel(gasPrice, averageGasolineSpendingByKm, distance) {
     if (isNaN(gasPrice) || isNaN(averageGasolineSpendingByKm) || isNaN(distance)) {
          return "ERRO: Dados inválidos!";
     } else {
          let travelValue = distance / averageGasolineSpendingByKm;
          travelValue *= 7.27;
          return travelValue.toFixed(2).replace('.', ',');
     }
}