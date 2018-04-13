var fs = require("./Letter.js");


function Word (currentWord) {
    this.currentWord = currentWord;
  //  this.correct = true;
   // this.
    this.printInfo = function() {
      console.log(this.currentWord);
    };
  };

  module.exports = Word;
