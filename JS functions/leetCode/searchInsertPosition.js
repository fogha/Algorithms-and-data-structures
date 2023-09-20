/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var index = 0;
  var isLargerThanLastElement = nums[nums.length - 1] < target;
  var isSmallerThanFirstElement = nums[0] > target;

  // check if the number is present in the array
  if (nums.includes(target)) {
    index = nums.indexOf(target);
  }

  // Check if the target smaller than the first element, since arr is sorted, index = 0
  if (isSmallerThanFirstElement) {
    index = 0;
  }

  // Check if the target lerger than last element, since arr is sorted, index = lastindex + 1
  if (isLargerThanLastElement) {
    index = nums.length;
  }

  // If Conditions above are not met, then find the index where it belongs
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target && nums[i + 1] > target) {
      index = i + 1;
      break;
    }
  }

  return index;
};