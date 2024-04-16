let message = require("./calculator_messages.json");
let readline = require("readline-sync");
const LANGUAGE = 'it';

function messages(lang, msg) {
  return message[lang][msg];
}

function prompt(key) {
  let message = messages(LANGUAGE, key);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

while (true) {
  prompt("firstNumber");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("incorrectNumber");
    number1 = readline.question();
  }

  prompt("secondNumber");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("incorrectNumber");
    number2 = readline.question();
  }

  prompt("operation");
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("invalidOperator");
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }
  console.log('=> ' + output); //

  prompt("anotherOperation");
  let answer = readline.question();

  if (LANGUAGE === 'en') {
    while (answer[0].toLowerCase() !== 'y' && answer[0].toLowerCase() !== 'n') {
      prompt("yesOrNo");
      answer = readline.question();
    }
  } else if (LANGUAGE === 'it') {
    while (answer[0].toLowerCase() !== 's' && answer[0].toLowerCase() !== 'n') {
      prompt("yesOrNo");
      answer = readline.question();
    }
  }

  if (answer[0].toLowerCase() === 'n') break;
}