const readline = require('readline-sync');

let prompt = function (message) {
  console.log(`=> ${message}`);
}

let isInvalidNumber = function (number) {
  return number.trimStart() === '' ||
                Number(number) < 0 || 
                Number.isNaN(Number(number));
}

prompt("Welcome to mortgage calculator!");
prompt("-----------------------------------");

while (true) {
  prompt("What is the loan amount?");
  let loanAmount = readline.question();
    
  while (isInvalidNumber(loanAmount)) {
    prompt("Must enter a positive number!");
    loanAmount = readline.question();
}
    
prompt("What's the interest rate?");
prompt("Example: 5 for 5% or 2.5 for 2.5%");
let interestRate = readline.question();
    
while (isInvalidNumber(interestRate)) {
    prompt("Must enter a positive number!");
    interestRate = readline.question();
}
    
prompt("What's the loan duration (in years)?");
let years = readline.question();
    
while (isInvalidNumber(years)) {
    prompt("Must enter a positive number!");
    years = readline.question();
}


let annualInterestRate = Number(interestRate) / 100;
let monthlyInterestRate = annualInterestRate / 12;
let months = Number(years) * 12;
    
let monthlyPayment = Number(loanAmount) * 
                (monthlyInterestRate / 
                (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));
    
prompt(`Your monthly payment is ${monthlyPayment.toFixed(2)}`);
    
prompt("Another calculation");
let answer = readline.question();
    
while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt("Please enter 'y' or 'n' ");
    answer = readline.question();
}
 
  if (answer[0] === 'n') break;
}