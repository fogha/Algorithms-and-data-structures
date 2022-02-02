

const findPermutations = (string) => {
  if(!string || typeof string !== "string") {
      return "Please you should enter a string";
  
  } else if(string.length < 2) {
      return string;
  }

  let permutationsArray = [];

  for(let i=0; i<string.length; i++) {
      let mainChar = string[i];
      let remainingChars = string.slice(0, i) + string.slice(i+1, string.length);
      for(let permutation of findPermutations(remainingChars)) {
          permutationsArray.push(mainChar + permutation)
      }
  }
  return permutationsArray;
}

const biggerCheck = (string) => {
  let arr = findPermutations(string);
  arr.sort((a, b) => {
    result = (a < b) ? -1 : (a > b) ? 1 : 0;
    return result;
  })
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > string) {
      return arr[i]
    }
  }
  return -1
} 

console.log(biggerCheck('abcd'));
console.log(biggerCheck('hefg'));
console.log(biggerCheck('dhck'));
console.log(biggerCheck('dkhc'));


