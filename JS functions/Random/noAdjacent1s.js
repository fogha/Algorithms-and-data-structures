
let count = 0
function fn(array, n, i) {

    let left = 0;
    let right = 0;

    if(i > 0) {
        left = array[i-1]
    }
    if(i < array.length - 1) {
        left = array[i+1]
    }

    if(count === n) {
        return true
     }
 
     if(i >= array.length) {
         return false
     }
     
    if(array[i] === 0 && left === 0 && right === 0) {
        count += 1
        return fn(array, n, i+2)
    }
    return fn(array, n, i+1)
}

// console.log(fn([1,0,0,0,1], 1, 0));
// console.log(fn([0], 1, 0));
console.log(fn([0, 1], 1, 0));
console.log(fn([1, 0], 1, 0));



// function noAdjacent1(array = [100001], n = 1) {

//     let count = n
    
//     for(let i from 0 to array.length - 1) {
    
//         if(count === 0) {
//             break;
//         }
        
//         left = 0
//         if(i > 0) {
//             left = array[i-1]
//         }
//         right = 0
//         if(i < array.length - 1) {
//             left = array[i+1]
//         }
        
//         if(array[i] === 0 and left === 0 and right === 0) {
//             replace(array[i], 1);
//             count = count - 1
//         }
    
//     }
    
//     return count == 0
// }
