function reverse(binary) {
    return function (a, b) {
        return binary(b, a);
    }
}

const sub = (a, b) => {
    return a-b;
}

console.log(reverse(sub));