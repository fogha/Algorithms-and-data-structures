let arr = ['kah', "Eyeni", "Mbu"];

function Display(n) {

    for(let i=0; i<arr.length; i++) {
        console.log(arr[i])
    }
    for(let j=arr.length; j>=0;j--) {
        console.log(arr[j])
    }
    //return 0;
}

console.log(Display(arr));