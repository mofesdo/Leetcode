/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //Create an object to hold all values that we iterate through and their indexes
    let previousValues = {};
    for(let i = 0; i < nums.length; i++){
        const currentNumber = nums[i];
        const neededValue = target - currentNumber;
        const index2 = previousValues[neededValue];
        //If the current number + a previous value = the target, return the two indexes
        if(index2 != null){
            return [index2, i]
        } else {
            previousValues[currentNumber] = i;
        }
    }
};