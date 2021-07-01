/* Solution Begins On Line 36 */

/*

    Repeat:

    Given a string s consists of some words separated by spaces, 
    return the length of the last word in the string. 
    If the last word does not exist, return 0.
    A word is a maximal substring consisting of non-space characters only.

*/

/*

    Example:

    Example 1:
    Input: s = "Hello World"
    Output: 5

    Example 2:
    Input: s = " "
    Output: 0

*/

/*

Approach:

String Manipulation -

*/

const lengthOfLastWord = function(s) {
    let str = s.trim();
    let len = str.length;
    let i = len - 1;

    while (i >= 0 && str [i] !== ' ') i--;
    return len - 1 - i;
};