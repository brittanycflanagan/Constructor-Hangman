
var currentWord = "puppy";

function Letter (guess) {
    this.guess = guess;
   
    this.printInfo = function() {
      console.log(this.guess);
    };
  };


module.exports = Letter;
