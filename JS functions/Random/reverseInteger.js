function reverseInteger(x) {
  const isNegative = x < 0;

  let reversedInteger = Math.abs(x).toString().split('').reverse().join('');
  if (isNegative) (
    reversedInteger = -1 * reversedInteger
  )
  return (reversedInteger > 2 ** 31 - 1 || reversedInteger < -(2 ** 31)) ? 0 : reversedInteger;
}

console.log(reverseInteger(-321));
console.log(reverseInteger(123));
console.log(reverseInteger(2147483648));
console.log(reverseInteger(-8463847412));

