
// const stringCounter = (arr) => {
//     let resultArray = [];
//     let finalArray = [];
    
//     if(arr[arr.length - 1].length === 4) {
//         resultArray.slice(-1, 1);
//         return resultArray;
//     }

//     if(arr.length < 2) {
//         console.log(arr[0]);
//     }

//     for(let k = 0; k<arr.length; k++) {
        
//         resultArray.push(arr[k]);
//     }

//     for(let i=0; i<arr.length; i++) {

//         // if(resultArray[resultArray.length - 1].length === 3) {
//         //     resultArray.slice(-1, 1);
//         //     return resultArray;
    
//         // } 

//         for(let j=0; j<arr.length; j++) {

//             if(resultArray[resultArray.length - 1].length === 4) {
//                 resultArray.slice(-1, 1);
//                 return resultArray;
        
//             } else {
//                 resultArray.push(arr[i] + arr[j]);
//             }
//         }
//     }


//     //finalArray = [...resultArray]
//     //console.log(finalArray);
//     //resultArray.slice(-1)
//     return stringCounter(resultArray);

// }

// let array = ['a', 'x', 'b'];

// console.log(stringCounter(array));



/**
 * Gets all combinations of length r from the input array with repeation
 * e.g If the input is [a,b] and r = 2, it returns [aa, ab, ba, bb]
 * 
 * @param {[]} arr Input array
 * @param {Number} r nuber to select at a time
 * @param {[]} curr The current permuation
 * @param {[]} result The final result
 */
function combinationR(arr, r, curr, result){
    for(let i = 0; i < arr.length; i++){
        curr.push(arr[i]);
        if(curr.length < r){
            combinationR(arr, r, curr, result);
            curr.pop();
        }
        else{
            result.push(curr.join(""));
            curr.pop();
        }
    }
}

/**
 * Generates all combinations of an input array from length 1 to N
 * e.g if the input array is [a,b], and N = 2, then the result is [a, b, aa, ab, ba, bb]
 * 
 * @param {[]} arr The input array
 * @param {Number} n The max length 
 */
function oneToN(arr, n){
    let result = [];
    for(let i = 1; i <= n; i++){
        let res = [];
        combinationR(arr, i, [], res);
        result = result.concat(res);
    }
    return result;
}

let arr = ['a','b','c'];
let n = 3;
let result = oneToN(arr, n);
console.log(result);