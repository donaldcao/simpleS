/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};
    
    for(var i = 0; i < nums.length; i++) {
        var another = target - nums[i];
        if(hash.hasOwnProperty(another)) {
            return [hash[another],i];
        } else {
            hash[nums[i]] = i;
            // console.log(hash);
        }
    }
};