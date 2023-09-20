/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let K = 0;
  for (let i = 0; i < nums.length; i++) {
    //If the current is not same as val, increment k and continue
    if (nums[i] !== val) {
      K++;
      continue;
    }
    //Else set the current to _ 
    nums[i] = "_"
  }

  // sort array and return K
  nums.sort();
  return K;
};