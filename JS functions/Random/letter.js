function letters() {
    this.storage = [];
    this.operation = operation;
    this.dis = dis;
}
function operation(word) {
    word.split('').map((i) => this.storage.push(i));
}

function dis() {
    return this.storage.join("");
    //console.log(dis);
}

let newWord = new letters();
newWord.operation('Lorde');
console.log(newWord.storage);
newWord.dis();
console.log(newWord.dis());


