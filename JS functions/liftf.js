const addF = (a) => {
    return function(b) {
        return a+b;
    }
}

function liftF(binary) {
    return function (first) {
        return function (second) {
            return binary(first, second);
        }
    }
}