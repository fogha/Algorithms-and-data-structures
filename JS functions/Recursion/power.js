const power = (a, b) => {
    if(b === 0) return 1;
    else {
        return a * power(a, b-1);
    }
}

console.log(power(5, 1));