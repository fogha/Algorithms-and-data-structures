//This piece of code is full of errors

// 'use strict';
// const isPerfect = function(number) {
//   let sumOfFactors = 0;
//   for(index = 1; index <= number; index++) {
//     if(number % index == 0) {
//       sumOfFactors += index;
//     }
//   }
//   return sumOfFactors
//     == number * 2;
// };
// for(i = 1; i <= 10; i++) {
//   console.log('is ' + i + ' perfect?: ' + isPerfect(i));
// }

'use strict';
//This is the refactored code. #No errors
const isPerfect = function(number) {
  let sumOfFactors = 0;
  for(let index = 1; index <= number; index++) {
    if(number % index === 0) {
      sumOfFactors += index;
    }
  }
  return sumOfFactors === number * 2;
};
for( let i = 1; i <= 10; i++) {
  console.log('is ' + i + ' perfect?: ' + isPerfect(i));
}