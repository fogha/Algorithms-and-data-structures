

const dominator = (arr) => {
  let values = {};
  let maxValue = arr.length/2
  let dominator;

  for(let val of arr) {
    if(values[val] == null) {
      values[val] = 1;
    } else {
      values[val]++;
    }
  }

  for(let count of arr) {
    if(values[count] > maxValue) {
      dominator = count;
    }
  }
  
  if(dominator) {
    return dominator;
  }
  return 'It doesnt exist'
}

console.log(dominator([3, 4, 2, 3, 3, 2, -1, 3, 3]));
console.log(dominator([3, 4, 2, 3, 2, 2, -1, 3, 3]));