// Given an array a[] of size N which contains elements from 0 to N - 1,
// you need to find all the elements occurring more than once in the given array

const findDuplicates = (arr) => {
  const results = [];
  const elementOccurencies = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (elementOccurencies.has(arr[i])) {
      results.push(arr[i])
      continue;
    } else {
      elementOccurencies.set(arr[i])
    }
  }
  return results;
}

console.log(findDuplicates([12, 10, 9, 45, 2, 10, 10, 45]));