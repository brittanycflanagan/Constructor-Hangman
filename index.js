// use recursion loop to continue taking a letter imput

var inquirer = require('inquirer');
var Letter = require('./Letter.js');
var Word = require('./Word.js');

var wordChoices = ["yahtzee","booby trap", "jenga", "sequence"]
var pickWord;
var currentWord;

pickRandomWord();

function pickRandomWord() {
    pickWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    currentWord = new Word(pickWord);
}

var count = 5;

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count > 0) {
        inquirer.prompt([{
            name: "guess",
            message: "Guess a Letter!"
        }]).then(function(answers) {
            //console.log(answers.guess);
            currentWord.printInfo();
            var newGuess = new Letter(answers.guess);
            newGuess.printInfo();
            count--;
            console.log("You have "+count+" guesses left!");
            askQuestion();
        });
    }
};

askQuestion();