/*
Given a number n, return an array composed of the string representations of the numbers from 1 to n. But there's a twist! For multiples of 3, return the string "Fizz" instead of the number; for multiples of 5, return the string "Buzz"; and for multiples of both 3 and 5, return the string "FizzBuzz".

Example

For n = 15, the output should be
solution(n) = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"].

Input/Output

    [execution time limit] 4 seconds (js)

    [input] integer n

    Guaranteed constraints:
    1 ≤ n ≤ 104.

    [output] array.string

    Return an array of strings, as described above.
*/

function solution(n) {
    var result= [];
    for (var i= 1; i<= n; i++) {
        if (i%15=== 0) result.push("FizzBuzz");
        else if (i%3=== 0) result.push("Fizz");
        else if (i%5=== 0) result.push("Buzz");
        else result.push(i.toString());
    }
    return result;
}

console.log(solution(15))