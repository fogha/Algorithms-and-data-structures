function composeU(f, g) {
    return function(a) {
        return g(f(a));
    }
}


function composeb (f, g) {
    return function (a, b, c) {
        return g(f(a, b), c);
    }
}

function add_ltd (binary, n) {
    return function (a, b) {
        if(n >= 1) {
            n -= 1;
            return binary(a, b);
        }
        return undefined;
    };
}