// ask the user for their move
// the computer will choose their move 
// display the result who won/the result

const readline = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
    console.log(`=> ${msg}`);
}

let displayWinner = function (choice, computerChoice) {
  prompt(`You chose ${choice}. Computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'scissors' && computerChoice === 'paper')||
        (choice === 'paper' && computerChoice === 'rock')) {
        prompt("You won!");
  } else if ((choice === 'scissors' && computerChoice === 'rock') ||
            (choice === 'paper' && computerChoice === 'scissors')||
            (choice === 'rock' && computerChoice === 'paper')) {
        prompt("Computer won!");
  } else {
        prompt("It's a tie!");
  }
}

while (true) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
        prompt("That's not a valid choice");
        choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];


    displayWinner(choice, computerChoice);


    prompt("Would you like to play again? (y/n)");
    let answer = readline.question().toLowerCase();

    while (answer[0] !== 'y' && answer[0] !== 'n') {
      prompt("Must enter 'y' or 'n'");
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y') break;
}

prompt("You can play it anytime you want.");