// Question:
// Build a program that asks the user to enter the length and width of a room in meters, 
// and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Sulotion:

// import library
const readline = require("readline-sync");
// store the square feet
const SQFEET = 10.7639;

let prompt = message => {
    console.log(`=> ${message}`);
}

// Get the the length of room
prompt("What is the length of the room in meters:");
let length = readline.question();
  
// Get the width of room
prompt("What's the width of the room in meters:")
let width = readline.question();

while (true) {
// Calculate the area of the room in meters and square feet
  let areaInMeters = length * width;
  let areaInFeet = areaInMeters * SQFEET; 
    
// Display the result
  console.log(`The area of the room is ${areaInMeters.toFixed(2)} in meters and ${areaInFeet.toFixed(2)} in square feet.`);

// Ask for another calculation
  prompt("Another calculation");
  let answer = readline.question();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
        prompt("Must enter 'y' or 'n'.");
        answer = readline.question();
    }

    if (answer[0].toLowerCase() !== 'y') break;
  
}
