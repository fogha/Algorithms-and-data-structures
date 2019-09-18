function twice(binary){
    return function doubl(a) {
        return binary(a, a);
    }
}