const identityF = (a) => {
    return function() {
        return a;
    }
}

console.log(identityF(6));