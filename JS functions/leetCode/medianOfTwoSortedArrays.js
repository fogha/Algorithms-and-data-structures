/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


var findMedianSortedArrays = function(nums1, nums2) {
    let sortedArray = nums1.concat(nums2).sort((a, b) => (a - b));
    let median = 0

    console.log(sortedArray)
    if(sortedArray.length % 2 === 1) {
        let middleIndex = Math.floor(sortedArray.length / 2);
        let middleChild = sortedArray[middleIndex]
        median = middleChild
    } else {
        let firstMiddleIndex = (sortedArray.length/2) - 1;
        let secondMiddleIndex = (sortedArray.length/2);
        let firstMiddleChild = sortedArray[firstMiddleIndex];
        let secondMiddleChild = sortedArray[secondMiddleIndex]

        median = (firstMiddleChild + secondMiddleChild)/2
    }
    return median
};