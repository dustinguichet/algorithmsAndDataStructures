/* Solution Begins On Line 22*/

/*
    Repeat:

    Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

*/

/*
    Examples:

    Example 1:
    Input: root = [1,2,2,3,4,4,3]
    Output: true
    
    Example 2:
    Input: root = [1,2,2,null,3,null,3]
    Output: false
*/

const isSymmetric = function(root) {
    if (root == null) return true;
    return symmetry(root.left, root.right);
};

const symmetry = function(left, right) {
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;

    return (left.val === right.val 
            && symmetry(left.left, right.right) 
            && symmetry(left.right, right.left))
}