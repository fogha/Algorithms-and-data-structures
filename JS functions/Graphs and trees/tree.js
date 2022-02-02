class Node {
    constructor(data, left, right){
        this._data = data;
        this._left = left;
        this._right = right;
    }
}

let B = new Node("B", null, null)
let C = new Node("C", null, null)
let A = new Node("A", B, C)

console.log(A.left)
console.log(A._left)