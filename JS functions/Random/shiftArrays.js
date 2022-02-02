

const duplicateZeros = (arr) => {
    for(let i = 0; i < arr.length ; i++) {
        if(arr[i] != 0) {
            continue;
        } else {
            insertZero(arr, i+1)
            i += 1
        }
    }
    return arr
}

const insertZero = (arr, pos) => {
    for (j = arr.length - 2; j >= pos; j--) {
        arr[j+1] = arr[j]
    }
    arr[pos] = 0
}


console.log(duplicateZeros([1,0,2,3,0,4,5,0]));


// [1,1,0,1,1,1]
// return 3
// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
// Acha Bill18:04
// ------------
// Given an array nums of integers, return how many of them contain an even number of digits.

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.
// Acha Bill18:19
// I shared a Jam file with the meeting: https://jamboard.google.com/d/1heZUZHyw-g-5DjPAqtKyYMWZTtGfd0yqZIUBEJ6qT34/edit?usp=meet_whiteboard
// Acha Bill18:32
// ------
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]

// Input: arr = [1,2,3]
// Output: [1,2,3]
// N.B: Do the above modifications to the input array in place
// Acha Bill18:53
// ---
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
// Acha Bill18:55
// Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
// Acha Bill18:59
// i.e A linear solution. Not necessarily af function of n
// O(n)
O(n+m) // let m be a scalar 