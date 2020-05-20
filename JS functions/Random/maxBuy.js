
function maxBuy(arr, k) {
    let sum = 0;
    let resultArray = [];
    arr.sort();
    for(let i=0; i<arr. length; i++) {
    sum += arr[i];
    if(sum <= k) {
        resultArray.push(arr[i]);
    } 
   }

   console.log(`the number max number of items is ${resultArray.length}`);
   return resultArray;

}

console.log(maxBuy([1,2,3,4,5], 15));
console.log(maxBuy([7,2,1,3], 7));
console.log(maxBuy([7,5,2,2,4,1,3], 10));