// use recursion loop to continue taking a letter imput

var inquirer = require('inquirer');
var Letter = require('./Letter.js');

inquirer.prompt([{
    name: "guess",
    message: "Guess a Letter!"
  }]).then(function(answers) {
    //console.log(answers.guess);
    var newGuess = new Letter(answers.guess);
    newGuess.printInfo();
});

