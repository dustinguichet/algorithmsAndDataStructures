/* Solution Begins On Line  32 */

/*
    Problem:
    Given an integer x, return true if x is palindrome integer.
    An integer is a palindrome when it reads the same backward as forward.
    For example, 121 is palindrome while 123 is not.
 */

/*
    Example 1: 
    Input: 121
    Output: true

    Example 2:
    Input: -121
    Output: false
    Explanation: From left to right, -121. From Right to left 121-
    not a palindrome.

    Examples 3:
    Input: 10
    Output: false
    Explanation: reads 01 right to left.
*/

/*
    Thoughts:
    Off the bat, we can exclude negatives
*/

var isPalindrome = function(x) {
    if (x < 0) {
      return false;
    }
    let test = x;
    let reverse = 0;
    while (test > 0) {
      reverse = reverse * 10 + (test % 10);
      test = Math.floor(test / 10);
    }
    return reverse === x;
  };
