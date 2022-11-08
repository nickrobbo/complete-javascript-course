// Tip Calculator
// If the bill value is between 50 and 300 -> tip = 15% : Otherwise the tip = 20%

const billTotal = 275;
let tip;

tip = billTotal >= 50 && billTotal <= 300 ? billTotal * 0.15 : billTotal * 0.2;
console.log(
  `The bill was ${billTotal}, the tip was ${tip}, and the total was ${
    billTotal + tip
  }`
);
