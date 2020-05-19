import { forEach, times, unless, memorize} from '../lib/es6-functional';

// var array = [1,2,3,4];
// forEach(array, (e) => { console.log(e)})

//get all even numbers between 0 and 100
// times(100, (i) => {
//   unless(i % 2 == 0, () => {
//     console.log(i, 'is even');
//   })
// })

//run a function and store the values gotten in order to reduce
//runtime for inputs of same value as they will produce the same output

let factorial = memorize((n) => {
  if (n === 0) 
    return 1

    return n * factorial(n-1);
}) 

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(7));