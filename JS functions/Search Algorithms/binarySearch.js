const binarySearch = (arr, c) => {
    let start = 0;
    let end = arr.length - 1
    let mid = Math.floor((start + end)/2);
    while(arr[mid] !== c && start <= end) {
        if(arr[mid] < c) {
            start = mid + 1;
        } else if(arr[mid] > c){
            end = mid - 1
        } 
        mid = Math.floor((start + end)/2);
    }
    if(arr[mid] === c) return mid;
    else return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8], 10));

