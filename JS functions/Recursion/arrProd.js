const arrProd = (arr) => {
    if(arr.length === 0) {
        console.log(arr.length);
        return 0;
    } else {
        return arr[0] * arrProd(arr.slice(1));
    }

}

s = [1, 2, 3]
arrProd(s)

