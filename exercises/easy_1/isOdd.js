// Question:
/*
Write a function that takes one integer argument, which may be positive, negative, or zero.
This method returns true if the number's absolute value is odd.
You may assume that the argument is a valid integer value.
*/

// Solution:

// using if/else statements:
let isOdd = function(num) {
    if (num % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

console.log(isOdd(4));
console.log(isOdd(-3));

// using Boolean() function:
function isOdd(number) {
    return Boolean(number % 2);
}

console.log(isOdd(5)); // true
console.log(isOdd(-6)); // false
