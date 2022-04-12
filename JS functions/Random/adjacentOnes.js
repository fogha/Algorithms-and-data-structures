// Given  an array 1s and 0s, find the length of the longest consercutive 1s if u can  replace only one 0 with a 1
const consercutiveOnes = (arr) => {
    let count = 0;
    let allZeros = [];
    let currentCount = 0;
    for (let i = 0; i < arr.length; i++) {
        
    }
    return count
}

// const consercutiveOnes = (arr) => {
//     let count = 0;
//     let currentCount = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === 0) {
//             arr[i] = 1;
//             currentCount = getLongestConsercutiveOnes(arr)
//             currentCount > count ? count = currentCount : currentCount = 0;
//             arr[i] = 0
//         }
//     }
//     return count;
// }

// const getLongestConsercutiveOnes = (arr) => {
//     let count = 0;
//     let currentCount = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 1) {
//             currentCount += 1;
//             currentCount > count && (count = currentCount);
//         } else {
//             currentCount = 0
//         }
//     }
//     return count;
// }

// console.log(consercutiveOnes([0, 1, 0]));
// console.log(consercutiveOnes([0]));
// console.log(consercutiveOnes([0,0,0]));
// console.log(consercutiveOnes([1]));
// console.log(consercutiveOnes([1,0]));
// console.log(consercutiveOnes([0, 0, 1, 1]));
console.log(consercutiveOnes([1,0,1,1,0]));
// console.log(consercutiveOnes([1,1,0,0,1,]));