
/**
 * Rotate each element to the left,the number of rotations depend on the value of n given
 * e.g If the input is [a,b,c] and n = 2, it returns [c,a,b],
 *        If the input is [a,b,c] and n = 1, it returns [b,c,a]
 * 
 * @param {[]} arr Input array
 * @param {Number} n number of rotations you want 
 *
 */

function leftRotation(n, arr) {
    for(let i=1; i <= n; i++) {
        let temp;
        temp = arr[0];
        for(let n=0; n<arr.length - 1; n++) {
            arr[n] = arr[n+1];
        }
        arr[arr.length - 1] = temp;
    }
    return arr;
}


//==============Bill's Method/////

function leftShift(arr,n){
    //let arr = [1,2,3,4,5]
    //let n = 24
    //then actual shifts = 24 % 5 = 4. So 4 actual shifts
    actualShifts = n % arr.length;
    part1 = arr.slice(0,actualShifts); // arr.slice(0,4) = [1,2,3,4]
    part2 = arr.slice(actualShifts);  // arr.slice(4) = [5]
    result = part2.concat(part1);  // [5,1,2,3,4]
    return result;
 }

console.log(leftRotation(2, [1,2,3,4,5]))
console.log(leftRotation(4, [1,2,3,4,5]))
