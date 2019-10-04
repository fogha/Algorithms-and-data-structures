const sock = (n, ar) => {
    let count = 0;
    for(let i=0; i<ar.length; +i++) {
        for(let j=0; j<ar.length; j++) {
            if(ar[i] === ar[j] && i !== j) {
                ar.splice(i, 1);
                ar.splice(j, 1);
                //console.log(ar);
                count++;
            }
        }
    }
    console.log(ar);
    return count;

}

console.log(sock(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))