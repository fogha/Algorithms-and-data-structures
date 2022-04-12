
const squaredArrays = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i]
    }

    return countingSort(arr);
}

function countingSort(arr) {
    return arr.reduce((acc, v) => (
        acc[v] = (acc[v] || 0) + 1, acc
    ), [])
        .reduce((acc, n, i) => acc.concat(Array(n).fill(i)), []);
}

console.log(squaredArrays([-7, -3, 2, 3, 11]));
console.log(squaredArrays([-4, -1, 0, 3, 10]));