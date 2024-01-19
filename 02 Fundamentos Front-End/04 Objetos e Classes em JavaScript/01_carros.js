class Car {
     constructor(brand, color, gasForKm) {
          this.brand = brand;
          this.color = color;
          this.gasForKm = gasForKm;
     }

     calculateCoustOfTravel(distance, fuelPrice) {
          let totalGas = distance * this.gasForKm;
          return totalGas * fuelPrice;
     }
}

const UNO = new Car("Fiat", "Prata", 1 / 12);
console.log(UNO);
console.log("R$" + UNO.calculateCoustOfTravel(100, 7.40).toFixed(2).replace('.', ','));