

function bubbleSort(arr) {
  let length = arr.length;
  for(let i = 0; i < length; i++) {
    
    for(let j = 0; j < length; j++) {
      if(arr[j] > arr[j+1]) {
        //swapping the element
        let temp = arr[j]
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }

  }

  return arr;
}

console.log(bubbleSort([5,9,2,0,8,6,3,1]))