/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
    let resultArray = [];

    for(let i = 0; i < nums.length; i++) {
        // look for another number that adds with current number to give the target
        let subsResult = target - nums[i];

        // check if the number gotten above is in the array
        // If it is, then both numbers sum up to the target, so return their indices
        if(nums.includes(subsResult) && i !== nums.indexOf(subsResult)) {
            let subsIndex = nums.indexOf(subsResult)
            return resultArray = [i, subsIndex]
        }
    }
};