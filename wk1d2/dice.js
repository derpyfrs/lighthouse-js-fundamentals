//function rollDice(num) {
  // dice are six sides
  //function inputs the amount of dice to roll
  //output is the dice rolls in a list
  //return
 //   }
  //}
//}
var userInput = process.argv[2];

function rollDice(num) {
  var diceRolls = "";
  for (i = num; i >=0; i--) {
      diceRolls += (Math.floor(Math.random() * (7 - 1)) + 1) + " ";
    }
    return ("Rolled " + num + " dice: " + diceRolls);
  }

console.log(rollDice(userInput))