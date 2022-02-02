let Prices = [];

function smallest(arr) {
    let min = arr[0];
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}

function discountPrice(arr) {
    let minimum = arr[0]
    let total =  arr[0]
    let bought = [arr[0]]

    for(let i = 1; i < arr.length; i++ ) {
        minimum = smallest(bought);
        if(minimum > arr[i]) {
            bought.push(arr[i])
        } else {
            bought.push(arr[i] - minimum);
        }
        total += bought[bought.length - 1]
    }
    return total
}

let test = [5, 4, 5, 1, 3, 3, 8, 2]

console.log(discountPrice(test))


// [5, 4, 5, 1, 3, 3, 8, 2]
// [5, 4, 1, 0, 3, 3, 8, 2]