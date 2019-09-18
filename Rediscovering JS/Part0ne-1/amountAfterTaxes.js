'use strict';
const amountAfterTaxes = function(amount, ...taxes) {
  const computeAmount = function(tax) {
    return amount * tax / 100.0;
  };

  const totalValue = function(total, value) {
    return total + value;
  };

  return taxes.map(computeAmount).reduce(totalValue, amount).toFixed(2);
};

const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localTax = 0.5;

console.log(amountAfterTaxes(25.12));
console.log(amountAfterTaxes(amount, fedTax));
console.log(amountAfterTaxes(amount, fedTax)); //27.63
console.log(amountAfterTaxes(amount, fedTax, stateTax)); //28.13
console.log(amountAfterTaxes(amount, fedTax, stateTax, localTax));