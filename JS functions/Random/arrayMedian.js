

// const mergeArrays = (arr1, arr2) => {
//     let arr3 = new Array(arr1.length+arr2.length)
//     let i = 0;
//     let j = 0;

//     for (let k = 0; k < arr3.length; k++) {
//         // [4,5] [1,2]
//         if (j > arr2.length - 1 || (i < arr1.length && arr1[i] <= arr2[j])) {
//             arr3[k] = arr1[i];
//             i++;
//         } else {
//             arr3[k] = arr2[j];
//             j++;
//         }
//     }
//     return calculateMedian(arr3);
// }
var mergeArrays = function (arr1, arr2) {
    var arr3 = [...arr1, ...arr2]
    if (arr3.length === 1) {
        return arr3[0]
    }
    arr3.sort((a, b) => a - b)
    return calculateMedian(arr3);
};

const calculateMedian = (arr) => {
    if(arr.length % 2 === 0) {
        let t1 = arr[arr.length/2 - 1];
        let t2 = arr[arr.length/2];
        console.log(t1, t2);
        return (t1 + t2)/2
    }
    return arr[Math.floor(arr.length/2)]
}

// console.log(mergeArrays([1,2], [3,4]));
// console.log(mergeArrays([0,0], [0,0]));

console.log(mergeArrays([], [2]));


