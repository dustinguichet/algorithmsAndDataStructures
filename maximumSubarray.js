/* Solution Begins On Line 39 */

/*

    Repeat:

    Given an integer array nums, 
    find the contiguous subarray (containing at least one number) 
    which has the largest sum and return its sum.

*/

/*
    Examples:

    Example 1:
    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.

    Example 2:
    Input: nums = [1]
    Output: 1

    Example 3:
    Input: nums = [5,4,-1,7,8]
    Output: 23

*/

/*
    Approach | Optimize:

    Set infinite parameters starting with 0.
    compare previous sum with current number.
    compare if the current previous is the greatest sum. 
*/

const maxSubArray = function(nums) {
    let prev = 0;
    let max = -Infinity;

    for(let i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        max = Math.max(max, prev);
    }
    return max;
};