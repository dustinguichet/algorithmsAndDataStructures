/* Solution Begins On Line 50 */

/*
    Problem | Repeat:

    Given a sorted array of distinct integers and a target value, 
    return the index if the target is found. 
    If not, return the index where it would be if it were inserted in order.
    You must write an algorithm with O(log n) runtime complexity.

*/

/*
    Example:

    Example 1:
    Input: nums = [1,3,5,6], target = 5
    Output: 2

    Example 2:
    Input: nums = [1,3,5,6], target = 2
    Output: 1

    Example 3:
    Input: nums = [1,3,5,6], target = 7
    Output: 4

    Example 4:
    Input: nums = [1,3,5,6], target = 0
    Output: 0

    Example 5:
    Input: nums = [1], target = 0
    Output: 0
*/

/*

    Approach | Optimize : 

    The problem is pretty straight forward.
    A for loop can be used to iterate one by one, but that would be brute force method.
    simple.
    Using a Binary Search will cut the time complexity down by searching segments of an array,
    until we are left with the target integer. 
    Cool, lets start with the Binary Search. 

    */

const searchInsert = function (nums, target) {
    let left = 0
    let right = nums.length;

    while (left < right) {
        const middle = Math.floor( (left+right) / 2);

        if (nums [middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return left;
};
    