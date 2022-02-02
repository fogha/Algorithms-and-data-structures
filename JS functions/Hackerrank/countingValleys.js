const countingValleys = (n, s) => {
    let alt = 0;
    let count = 0;
    for(let i=0; i<n; i++) {
        if(s.charAt(i) === 'D' && alt === 0) {
            count++;
            alt--;
        } else if (s.charAt(i) === 'D' && alt !== 0) {
            alt--;
        } else if (s.charAt(i) === 'U') {
            alt++;
        } 
    }
    return count;
}
let M = 'DDUUUUDDUDDDUDUU';
console.log(countingValleys(8, M))


