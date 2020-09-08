
// const powerSum = (x, n, curr_num = 1, sum = 0) => {
//   let result = 0;

//   let p = Math.pow(curr_num, n);

//     while(p + sum < x) {
//       result += powerSum(x, n, curr_num + 1, p + sum);

//       curr_num++;
//       p = Math.pow(curr_num, n);
//     }

//     if(p + sum == x)
//       result++

//   return result;
// }

const powerSum2 = (x, n) => {
  let result = 0;
  let sum = 0;
  let powers = [];

  for(let i=1; i <= x; i++) {
    powers.push(Math.pow(i, n));
    sum += powers[i];

    if(sum < x) {
      result += powerSum2 = (x, n)
      continue;
    }

    if(sum == x) {
      result += 1;
    }

    if(sum == x)
      result++
  }

  console.log(powers)
  return result;
}

//console.log(powerSum(10, 2));
console.log(powerSum2(10, 2));
//console.log(powerSum(13, 2));