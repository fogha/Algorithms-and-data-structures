function sumAll(arr) {
    let min = Math.min(arr[0], arr[1]);
    console.log(min);
    let max = Math.max(arr[0], arr[1]);
    console.log(max);
    let sum = 0;
    for(let i=min; i<max+1; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumAll([4, 1]));