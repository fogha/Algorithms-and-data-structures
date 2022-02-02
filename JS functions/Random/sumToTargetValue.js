// const sumToTarget = (arr, n) => {
//     const res = []

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === n && i !== j) {
//                 res.push(i, j)
//                 break;
//             }
//         }
//     }

//     return res;
// }

const sumToTarget = (arr, n, i = 0) => {
    const res = []

    if(i === arr.length - 1) {
        return;
    }

    while (j < arr.length) {
        if (arr[i] + arr[j] === n && i !== jn && res.length < 2) {
            res.push(i, j)
            break;
        }
    }

    return sumToTarget(arr, n, i++)
}




console.log(sumToTarget([3, 1, 3], 6));
console.log(sumToTarget([1, 2, 3], 5));