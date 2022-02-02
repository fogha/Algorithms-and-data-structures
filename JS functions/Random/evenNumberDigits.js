
const evenNumberOfDigits = (arr) => {
    // let count = 0;

    return arr.filter((n) => n.toString().length % 2 === 0).length

    // for(let i = 0; i < arr.length; i++ ) {
    //     let isEven = isDigitNumberEven(arr[i])
    //     if(isEven) {
    //         count += 1;
    //     }
    // }

    // return count;
}   

const isDigitNumberEven = (n) => {
    let numberOfDigits = n.toString().length;
    return (numberOfDigits%2 === 0)
}

// console.log(evenNumberOfDigits([555,901,482,1771]))
console.log(evenNumberOfDigits([555,901,4832,1771]))