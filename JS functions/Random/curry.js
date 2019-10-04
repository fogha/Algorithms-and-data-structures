const curry = (binary, a) => {
    return function (b) {
        return binary(a, b);
    }
}