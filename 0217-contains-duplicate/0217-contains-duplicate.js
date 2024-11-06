/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {}

    for(let i = 0; i < nums.length; i++){
        map[nums[i]] == undefined ? map[nums[i]] = 1 : map[nums[i]] += 1; 
    }

    for(let val of Object.keys(map)){
        if(map[val] > 1) return true;
    }

    return false;
};