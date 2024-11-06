/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let check = {};

    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];

        if(check[complement] !== undefined){
            return [check[complement], i];
        }

        check[nums[i]] = i;
    }

    return []
};