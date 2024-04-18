// Question:
// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// using for loop within the funciton
let logEvenNumbers = function (number) {
  for (let index = 0; index <= number; index += 2) {
  console.log(index);
  }
}

logEvenNumbers(99);

// using a while loop:
let index = 0;
while (index <= 99) {
  console.log(index);
  index += 2;
}
