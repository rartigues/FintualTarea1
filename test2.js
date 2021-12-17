/*
You are given a parentheses sequence, check if it's regular.

Example

    For s = "()()(())", the output should be
    solution(s) = true;
    For s = "()()())", the output should be
    solution(s) = false.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] string s

    A string, consisting only of '(' and ')'.

    Guaranteed constraints:
    0 ≤ s.length ≤ 105.

    [output] boolean

    true is the sequence is regular and false otherwise.

*/

function solution(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(s[i]);
        else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    if (stack.length === 0) return true;
    else return false;
}

