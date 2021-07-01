/* Solution Begins On Line 53 */

/*

    Repeat == Problem :
    Merge two sorted linked lists and return it as a sorted list. 
    The list should be made by splicing together the nodes of the first two lists.

*/

/*

    Example:

    Ex 1: 
    Input: l1 = [1,2,4], l2 = [1,3,4]
    Output: [1,1,2,3,4,4]

    Ex 2:
    Input: l1 = [], l2 = []
    Output: []

    Ex 3:
    Input: l1 = [], l2 = [0]
    Output: [0]

*/

/*
    Approach:

    By the examples the list is of course sorted,
    if l1 is shorter than l2 then l2 will have to be added to the tail.
    or vice versa. start with defining what null will be, 
    define the constant of the head, then apply a generator.
    ot sure if generators are compatible with IE though.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    const head = l1.val < l2.val ? l1 : l2;

    if (l1.val < l2.val) {
        head.next = mergeTwoLists(l1.next, l2);
    } else {
        head.next = mergeTwoLists(l1, l2.next);
    }

    return head;

};