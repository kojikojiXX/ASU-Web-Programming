/*jslint browser */

// CS 3312, spring 2023
// Examples for Studio 4

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {

   'use strict'; // Enforce stricter JavaScript rules.

   // Do things when the user clicks the "Write a poem" button.
   document.querySelector('#write-poem').addEventListener('click', function () {

      // Empty the output elements.
      document.querySelector('#poem-output').value = '';
      document.querySelector('#poem-error').textContent = '';

      // Get all three input strings.
      const noun = document.querySelector('#noun-input').value;
      const verb = document.querySelector('#verb-input').value.toLowerCase();
      const adjective = document.querySelector('#adjective-input').value.toLowerCase();
      // You can declare variables with const or let.
      // It's best to use const if the value will never change.

      // Check the lengths of the three input strings.
      if (noun.length > 0 && verb.length > 0 && adjective.length > 0) {
         // If we got three words, build a poem from scratch out of them.
         // Use + to concatenate strings together.
         const poemString = (
            noun + ' ' + verb + '\n' // \n gives a newline character.
            + adjective + ' ' + noun + ' ' + verb + '\n'
            + adjective + ' ' + noun + ' ' + verb + ' ' + noun + '\n'
            + adjective + ' ' + noun + ' ' + verb + ' ' + adjective + ' ' + noun + '\n'
            + verb + ' ' + noun + ' ' + verb.toUpperCase()
         );
         // Output the poem we built.
         document.querySelector('#poem-output').value = poemString;
      } else {
         // If any of the textboxes was empty, ask for more input.
         document.querySelector('#poem-error').textContent = 'Give me all three words if you want a poem!';
      }
   });

   // Do things when the user clicks the "Roll the dice" button.
   document.querySelector('#roll-dice').addEventListener('click', function () {
      // Declare this function's local variables.
      let diceString; // A string to describe the result of the dice rolls.
      let diceTotal;  // The total of all dice rolled.
      let whichRoll;  // Used to count the dice to roll.
      // You have to use let instead of const to allow a variable to change its value.

      // Empty the output elements.
      document.querySelector('#dice-output').textContent = '';
      document.querySelector('#dice-error').textContent = '';

      // Use the parseInt function to convert the input to a base-10 integer.
      const numberOfDice = parseInt(document.querySelector('#number-of-dice').value, 10);

      // Make sure the input number is a real number between 1 and 10.
      if (Number.isFinite(numberOfDice) && numberOfDice >= 1 && numberOfDice <= 10) {
         // Initialize the dice total and the output string.
         diceTotal = 0;
         diceString = '';
         // Run the same code for each die.
         for (whichRoll = 0; whichRoll < numberOfDice; whichRoll += 1) {
            // Generate one random number between 1 and 6.
            const dieRoll = Math.floor(Math.random() * 6) + 1;
            // Update the dice total and the output string.
            diceTotal += dieRoll;
            if (whichRoll > 0) {
               diceString += ' + ';
            }
            diceString += dieRoll.toString();
         }
         // For multiple dice, use the dice total to finish the output string.
         if (numberOfDice > 1) {
            diceString += ' = ' + diceTotal.toString();
         }
         // Output the result of the dice rolls.
         document.querySelector('#dice-output').textContent = diceString;
      } else {
         // Ask for an acceptable number of dice.
         document.querySelector('#dice-error').textContent = 'I need a number of dice between 1 and 10.';
      }
   });

   // Do things when the user clicks the "Print those powers" button.
   document.querySelector('#show-powers').addEventListener('click', function () {
      // I recommend declaring a function's local variables at the top of the function.
      let nextNumber; // The next result value to print out.
      let whichPower; // The next exponent to print out.
      // Each let declaration should be on its own separate line.
      // Adding a brief comment for each variable is good style.

      // Clear any old output.
      document.querySelector('#powers-output').value = '';

      // You can change these values to get different lists of powers.
      const base = 3;
      const limit = 1000000000;

      // Start at 1, the zeroth power of anything.
      nextNumber = 1;
      whichPower = 0;

      // Keep on going if still under the limit.
      while (nextNumber < limit) {
         // Output and then update.
         document.querySelector('#powers-output').value += (
            base.toString() + '^'
            + whichPower.toString() + ' = '
            + nextNumber.toString() + '\n'
         );
         nextNumber *= base;
         whichPower += 1;
      }
   });

   // Do things when the user clicks the "Draw a random map" button.
   document.querySelector('#draw-random-map').addEventListener('click', function () {
      let mapString;   // The map to build and print out.
      let whichColumn; // Used to count the columns of the map.
      let whichRow;    // Used to count the rows of the map.

      // Use the parseInt function to convert the input to a base-10 integer.
      const sizeOfMap = parseInt(document.querySelector('#size-of-map').value, 10);

      // Make sure the input number is a real positive number.
      if (Number.isFinite(sizeOfMap) && sizeOfMap > 0) {
         mapString = '';
         // Go through each row and column and build mapString from scratch.
         for (whichRow = 0; whichRow < sizeOfMap; whichRow += 1) {
            if (whichRow > 0) {
               mapString += '\n';
            }
            for (whichColumn = 0; whichColumn < sizeOfMap; whichColumn += 1) {
               // Math.random() will give a random real number between 0 and 1.
               if (Math.random() < 0.4) {
                  // 40% of the time, draw a mountain.
                  mapString += '^';
               } else {
                  // 60% of the time, draw a flat plain.
                  mapString += '-';
               }
            }
         }
      } else {
         mapString = 'I need a positive number to draw a map.';
      }

      // Output the beautiful result.
      document.querySelector('#random-map-output').value = mapString;
   });

   // Create a function and call it immediately.
   // This is a handy way to hide variables from the rest of the code.
   (function () {
      let goalNumber;  // The number the user is trying to make.
      let numberSoFar; // The number the user currently has.

      do {
         // Generate a random integer between 23 and 99 . . .
         goalNumber = Math.floor(Math.random() * 77) + 23;
      } while (goalNumber % 5 === 0);
      // . . . but make sure it's not a multiple of 5, because those are unsolvable.

      // Set up the math game for the player.
      document.querySelector('#goal-number').textContent = goalNumber.toString();
      numberSoFar = 1;
      document.querySelector('#number-so-far').textContent = numberSoFar.toString();
      document.querySelector('#math-game-message').textContent = 'Good luck!';

      // Allow the player to multiply the current number by 3.
      document.querySelector('#mult-3').addEventListener('click', function () {
         // Update the player's number.
         numberSoFar *= 3;
         // Output the new number and the game status.
         document.querySelector('#number-so-far').textContent = numberSoFar.toString();
         if (numberSoFar === goalNumber) {
            document.querySelector('#math-game-message').textContent = 'You win!';
         } else if (numberSoFar > goalNumber) {
            document.querySelector('#math-game-message').textContent = 'Too high.  Try restarting.';
         } else {
            document.querySelector('#math-game-message').textContent = 'Keep going . . .';
         }
      });

      // Allow the player to add 5 to the current number.
      document.querySelector('#add-5').addEventListener('click', function () {
         // Update the player's number.
         numberSoFar += 5;
         // Output the new number and the game status.
         document.querySelector('#number-so-far').textContent = numberSoFar.toString();
         if (numberSoFar === goalNumber) {
            document.querySelector('#math-game-message').textContent = 'You win!';
         } else if (numberSoFar > goalNumber) {
            document.querySelector('#math-game-message').textContent = 'Too high.  Try restarting.';
         } else {
            document.querySelector('#math-game-message').textContent = 'Keep going . . .';
         }
      });

      // Allow the player to restart the math game.
      document.querySelector('#restart-math-game').addEventListener('click', function () {
         do {
            // Generate a new random starting number.
            goalNumber = Math.floor(Math.random() * 77) + 23;
         } while (goalNumber % 5 === 0);
         document.querySelector('#goal-number').textContent = goalNumber.toString();
         numberSoFar = 1;
         document.querySelector('#number-so-far').textContent = numberSoFar.toString();
         document.querySelector('#math-game-message').textContent = 'Good luck!';
      });
   }());
});
