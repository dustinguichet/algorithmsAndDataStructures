/* Solution Starts On Line  30*/

/*
    Repeat Problem:
    Write a function to find the longest common prefix string amongst an array of strings.
    If there is no common prefix, return an empty string "".
*/

/*
    Example:

    Ex 1:
    Input: strs = ["flower,"flow","flight"]
    Output: "fl"

    Ex 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.    
*/

/*
    Approach: 
    Comparing two arrays of strings one letter at a time. 
    Writing a solution that is Character by Character Matching will be a brute force approach.
    I'm thinking that I should consider comparing the strings vertically instead of horizontally
    to minimize the comparisons. 
*/

var longestCommonPrefix = function(strs) {
    // Set prefix first to not run any uneccessary comparisons
        let prefix = ""
        if(strs === null || strs.length === 0) return prefix 
    // Time To Loop through the first string
        for (let i=0; i < strs[0].length; i++){
            const char = strs[0][i]
    //Now for the remainder in array
            for (let j=1; j < strs.length; j++){
                if(strs[j][i] !== char) return prefix 
            }
            prefix = prefix + char
        }
    
        return prefix 
    };