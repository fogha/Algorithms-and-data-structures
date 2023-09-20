/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // Joining numbers from the array to a string then converting to a number
  // Use BigInt because using Number wont work for a lot of inputs
  let integer = BigInt(digits.join(''));
  integer += BigInt(1);
  return integer.toString().split('')
};