/* Solution Begins On Line 28 */


/*
    Examples:

    Example 1:
    Input: root = [1,null,2,3]
    Output: [1,3,2]

    Example 2:
    Input: root = []
    Output: []

    Example 3:
    Input: root = [1]
    Output: [1]

    Example 4:
    Input: root = [1,2]
    Output: [2,1]

    Example 5:
    Input: root = [1,null,2]
    Output: [1,2]
*/

const inorderTraversal = function(root) {
    let stack =[];
    let now = root;
    let res = [];

    while (now || stack.length){
        while (now) {
            stack.push (now);
            now = now.left;
        }
        now = stack.pop();
        res.push(now.val);
        now = now.right;
    }
    return res;
};