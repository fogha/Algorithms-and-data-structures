function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.find = find;
    this.append = append;
}

function appendLarge(element) {
    for(let i=0; i<this.dataStore.length; i++) {
        if(element < this.dataStore[i]) {
            console.error("cannot append element");
        } else if(element > this.dataStore[i]) {
            this.dataStore[this.listSize++] = element;
        }
    }
    return true;
}

function appendSmall(element) {
    for(let i=0; i<this.dataStore.length; i++) {
        if(element > this.dataStore[i]) {
            console.error("cannot append element");
        } else if(element < this.dataStore[i]) {
            this.dataStore[this.listSize++] = element;
        }
    }
    return true;
}