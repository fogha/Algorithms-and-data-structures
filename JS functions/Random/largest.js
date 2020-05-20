const arr = [1,2,3,4,5];
const arrr = []

function largestNumber(arr) {
  let largest = -1;
  if(arr.length === 0)
    return 'Array is empty'
  for(const value of arr) {
    if(value > largest ) {
      largest = value
    }
  }

  return largest
} 

console.log(largestNumber(arr));
console.log(largestNumber(arrr));