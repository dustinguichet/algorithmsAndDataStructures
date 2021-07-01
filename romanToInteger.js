/* Solution Starts On Line 66.*/

/*
    Problem | Repeat
    Roman numerals are represented by seven different symbols:
    I (1), V (5), X (10), L (50), C (100), D (500) and M (1000)

    For example two is written as II in Roman numeral, just two one's added together. 
    Twelve is written as, XII, which is simply X+II.
    The number twenty seven is written as XXVII , which is XX+V+II

    Roman numerals are usually written largest to smallest from left to right. 
    However, the numeraal for four is not IIII. Instead four is written as IV.
    Because the one is before the five we sutract it making four.
    The same principle applies to the number nine, which is written as IX.
    There are six instances where subtraction is used:

    -I can be placed before V(5) and x(10) to make 9 and 4
    -X can be placed before L(50) and c(100) to make 40 and 90
    -C can be placed before D(500) and M(1000) to make 400 and 900

    Given the roman numeral, convert it to an integer.
    Input guaranteed to be within the range from 1 to 3999.
 */

/*
    Example:
    
    Ex 1:
    Input: s = "III"
    Output: 3

    Ex 2:
    Input: s = "IV"
    Output: 4

    Ex 3:
    Input: s = "IX"
    Output: 9

    Ex 4:
    Input: s = "LVIII"
    Output: 58
    Explanation: L = 50, V = 5, III = 3

    Ex 5:
    Input: s = "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/*
    Approach:
    After looking at the problem, I was thinking about mapping out the integers
    to each individual value, then create a new variable to correalate
    Roman num === integer.
    Due to the nature of how Roman Num are converted If the numerals are
    descending from largest to smallest, then add together.
    If not the larger number is subtracted by the smaller number.

    Roman Numeral law makes us iterate from left to right. if current symbol
    (AKA the one going through the function) is less than the right one, then
    subtract current from next and move 2 characters to the right. 
*/

var romanToInt = function(s) {

    const map = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (i=0; i < s.length; i++){
        const current = map[s[i]];
        const next = map[s[i+1]];

        if (current < next){
            result += next - current
            i++
        } else {
            result += current
        }
    }

    return result; 
};
/* Next Time I will try to use repeat, concat, parseInt, and switch statement.
    I believe that would make it a bit faster, since everything will be condensed. */