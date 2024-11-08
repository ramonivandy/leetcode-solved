/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1
    let res = 0;

    while(left < right){
        if(nums[left] + nums[right] < target){
            res += right - left;
            left++
        } else {
            right--
        }
    }

    return res
};