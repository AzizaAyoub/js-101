const readline = require("readline-sync");

console.log("Welcome to Calculator!");

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function prompt(message) {
  console.log(`=> ${message}`);
}


prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number!");
  number1 = readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number!");
  number2 = readline.question();
}

prompt(
  "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"
);
let operation = readline.question();

while (invalidNumber(operation)) {
  prompt("Hmm... that doesn't look like a valid operation!")
  operation = readline.question();
}


let output;
if (operation === "1") {
  // '1' represents addition
  output = Number(number1) + Number(number2);
} else if (operation === "2") {
  // '2' represents subtraction
  output = Number(number1) - Number(number2);
} else if (operation === "3") {
  // 3 represents multiplication
  output = Number(number1) * Number(number2);
} else if (operation === "4") {
  // 4 represents division
  output = Number(number1) / Number(number2);
}

prompt(`The result is: ${output}`);