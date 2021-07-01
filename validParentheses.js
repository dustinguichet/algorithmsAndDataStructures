/* Solution Starts On Line 48*/

/* 
    Problem:
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
    determine if the input string is valid.

    An input string is valid if:

    1.Open brackets must be closed by the same type of brackets.
    2.Open brackets must be closed in the correct order.
*/

/*
    Example:

    Ex1:
    Input: s = "()"
    Output: true

    Ex2:
    Input: s = "()[]{}"
    Output: true

    Ex3:
    Input: s = "(]"
    Output: false

    Ex4:
    Input: s = "([)]"
    Output: false

    Ex5:
    Input: s = "{[]}"
    Output: true
*/

/*
Approach:

Given the parameters, using Stack seems fitting for the problem,
We need to make sure the stack is repeating and in order "Last in ,First Out."" 
Every good stack needs a map, so thats where I'll start.
You ever see a library without indicators of where books go? 
I THINK NOT!
*/

var isValid = function(s) {
    var stack = [];
    var len = s.length;
    var map = {
        "(': ')"
        "[': ']"
        "{': '}"
    };
    for (var i = 0; i < len; i++) {
        if (stack.length > 0 && map[stack[stack.length -1]] === s[i]) {
            stack.pop();
          } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};
//Might be time to try the Medium and Hard Problems. 