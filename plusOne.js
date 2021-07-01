/* Solution Begins On Line 45 */

/*

    Repeat:

    Given a non-empty array of decimal digits representing a non-negative integer, 
    increment one to the integer.
    The digits are stored such that the most significant digit is at the head of the list, 
    and each element in the array contains a single digit.
    You may assume the integer does not contain any leading zero, except the number 0 itself.

*/

/*

    Example:

    Example 1:
    Input: digits = [1,2,3]
    Output: [1,2,4]
    Explanation: The array represents the integer 123.

    Example 2:
    Input: digits = [4,3,2,1]
    Output: [4,3,2,2]
    Explanation: The array represents the integer 4321.

    Example 3:
    Input: digits = [0]
    Output: [1]

*/

/*

    Approach:

    increase the value of the array 
    add placeholders above 9
    destructure and add digit sizes to ensure the array isnt all 0's

*/

const plusOne = function(digits) {
    let len = digits.length;
    for (let i = len-1; i>=0; i--) {
        if(digits[i] !=9) {
            digits[i]++;
            return digits;
        }
        else
            digits[i] = 0;
    }
    let arr = new Array(1);
    arr[0] = 1;
    return arr.concat (digits);
};