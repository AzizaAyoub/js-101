// Question:
/*
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will enter numbers.
*/

// Example:
// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

// Sulotion:

// import library
const readline = require("readline-sync");

// Define prompt function 
function prompt(message) {
    console.log(`=> ${message}`);
}

// Get bil amount 
prompt("What's the bill?");
let bill = parseFloat(readline.question());

// Get the percentage
prompt("What's the tip percentage?");
let parcentage = parseFloat(readline.question());

// calculate bill amount and percentage
let tip = bill * (parcentage / 100);
let total = bill + tip;

console.log(`The tip is ${tip.toFixed(2)}`);
console.log(`The total is ${total.toFixed(2)}`);