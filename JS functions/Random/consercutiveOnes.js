// Find the max number of consercutive ones in an array containing only 1s and 0s

const consercutiveOnes = (arr) => {
    let maxCount = 0;
    let currentCount = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0 ) {
            currentCount = 0;
            continue;
        }
        if(arr[i] === 1) {
            currentCount = currentCount + 1;
        } 
        if(currentCount > maxCount) {
            maxCount = currentCount;
        }
    }

    return maxCount;
}


// console.log(consercutiveOnes([1,1,0,1,1,1]))
// console.log(consercutiveOnes([1,0,1,1,0,1]))
console.log(consercutiveOnes([1]))
