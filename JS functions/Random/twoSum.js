// HINTS: Assume each input has just one solution
// You cannot use a certain value twice

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let remainder = target - arr[i]
    if (arr.includes(remainder)) {
      return [i, arr.indexOf(remainder)]
    }
  }
}
console.log(twoSum([2, 5, 11, 7, 15], 20));