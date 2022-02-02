

function sum(arr) {
  if(arr.length == 0)
    return 0

  let first = arr[0]
  let newArray = arr.slice(1);

  return first + sum(newArray);
}

console.log(sum([1,2,3,4,5]))