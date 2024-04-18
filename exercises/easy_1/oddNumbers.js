//Question:
// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// Solution:

// using a for loop within the function 
let logOddNumbers = function (number) {
  for (let index = 1; index <= number; index += 2) {
    console.log(index);
  }
}

logOddNumbers(99);

// using a while loop:

let index = 1;
while (index <= 99) {
  console.log(index);
  index += 2;
}