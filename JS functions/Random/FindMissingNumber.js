
//Taking a sorted array with numbers look for the missing number


const Finder = (arr, b) => {
    let missing;
    let n = arr.length;
    //arr[n-1] !== b ? console.log(`Missing element is ${b}`) : console.log(""); 

    //getting the sum of first n elements
    const sumOfN = ((b*b)+b)/2;
    console.log(sumOfN);

    const add = (a, b) => a+b;

    //sum of the elements in the array
    const sum = arr.reduce(add);
    console.log(sum);

    missing = sumOfN - sum;
    console.log(`missing number is ${missing}`);

    // for(let i = 0; i<arr.length; i++) {
        
    //     // if(arr[i] !== b){
    //     //     missing = b;
    //     //     //console.log("Say no more we have found the missing number");
    //     //     //console.log(missing);
    //     // } 
    //     if(arr[i+1] - arr[i] === 2) {
    //         console.log("One number is missing");
    //         missing = (arr[i+1] + arr[i])/2;
    //         console.log(missing);
    //     }
    // }
    
}


let test = [1,2,3,4,5,6,7];
let test1 = [1,2,3,4,5,7,8];
let test3 = [1,2,3,4,5,6,7,8,10];
let test4 = [1,2,3,4,5,6,7,9,10];

Finder(test, 8);
Finder(test1, 8);
// Finder(test3);
// Finder(test4);