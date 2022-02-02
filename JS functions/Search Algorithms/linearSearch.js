const linearSearch = (arr, a) => {
    if(arr.includes(a)) {
        return arr.indexOf(a);
    } else {
        return -1;
    }
}

const linearSearchTwo = (arr1, b) => {
    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] === b) {
            return i;
        } else {
            return -1;
        }
    }
}


console.log(linearSearch([1,2,3,4,5], 8));
console.log(linearSearchTwo([1,2,3,4,5], 1));