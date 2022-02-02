function grades() {
    this.studentGrades = [];
    this.add = add;
    this.averageGrade = averageGrade;
}

function add(value) {
    this.studentGrades.push(value);
}

function averageGrade() {
    let sum = 0;
    for(let i=0; i<this.studentGrades.length; i++) {
        sum += this.studentGrades[i];
        average = sum/this.studentGrades.length;
    }
    return average;
}


let Armand = new grades();
Armand.add(90);
Armand.add(69);
Armand.add(80);
Armand.add(78);
Armand.add(82);
Armand.add(89);
console.log(Armand.averageGrade())