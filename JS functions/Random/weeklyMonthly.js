
Array.matrix = function(numrows, numcols, initial) {
    let arr = [];
    for(let i=0; i<numrows; i++) {
        let columns = [];
        for(let j=0; j<numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}

function weekTemps() { 
    this.dataStore = dataStore; 
    this.add = add; 
    this.average = average;
}

dataStore = Array.matrix(12, 4, 0)

function add(val, mon, week) { 
    dataStore[mon][week].push(val);
}
function average() {
    var total = 0;
    for (var i = 0; i < dataStore.length; ++i) {
        for (var j = 0; j < dataStore[i].length; ++i) {
            total += dataStore[i][j]; 
        } 
    }
    return total / dataStore.length; 
}

var thisWeek = new weekTemps(); 
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
print(thisWeek.average());