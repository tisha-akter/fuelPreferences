const readline = require('readline');

function countFuelPreferences() {
  const fuelTypes = ['Alcohol', 'Gasoline', 'Diesel'];
  const fuelCounts = [0, 0, 0];
  const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function promptFuelType() {
    interface.question('Enter the fuel type (1. Alcohol, 2. Gasoline, 3. Diesel, 4. End): ', (answer) => {
      const fuelType = parseInt(answer);

      if (fuelType >= 1 && fuelType <= 3) {
        fuelCounts[fuelType - 1]++;
        promptFuelType();
      } else if (fuelType === 4) {
        interface.close();
        printFuelPreferences();
      } else {
        console.log('Invalid code. Please enter a valid fuel type.');
        promptFuelType();
      }
    });
  }

  function printFuelPreferences() {
    console.log('MUITO OBRIGADO');
    console.log(`Alcool: ${fuelCounts[0]}`);
    console.log(`Gasolina: ${fuelCounts[1]}`);
    console.log(`Diesel: ${fuelCounts[2]}`);
  }

  promptFuelType();
}

countFuelPreferences();




