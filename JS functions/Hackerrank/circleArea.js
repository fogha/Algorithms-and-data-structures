'use strict';

let readline = requrie('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let r;
const PI = Math.PI;

function main() {
    rl.on('line', (r) => {
        //Print the area of the circle
        console.log(PI * r * r);
        //Print the area of the circle
        console.log(PI * 2 * r);

        rl.close();
    })
}