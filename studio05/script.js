/*jslint browser */

// CS 3312, spring 2023
// Studio 5
// YOUR NAME: Koji Nohara

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   // Each little web app is hidden from the others using an IIFE.
   (function () {
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR isPrime FUNCTION HERE
      const inPrime = function (numSides) {
         if (!Number.isInteger(numSides) || numSides < 2) {
            return false;
         };

      };

      // The report function is hidden from the isPrime function using an IIFE.
      (function () {
         // Do not declare any other variables here, but you may declare variables inside your function.

         // WRITE YOUR report FUNCTION HERE

         // Call the report function even before there's a value to use.
         report();
         // When the number is changed at all, immediately . . .
         document.querySelector('#primality-input').addEventListener('input', function () {
            // . . . call the report function and pass it the user's value.
            report(parseInt(document.querySelector('#primality-input').value, 10));
         });
      }());
   }());

   (function () {
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR fibonacci FUNCTION HERE

      // Do things when the "Calculate it" button is clicked.
      document.querySelector('#calculate-fibonacci').addEventListener('click', function () {
         // Get the user's number.
         const whichFibonacciNumber = parseInt(document.querySelector('#fibonacci-input').value, 10);
         // Use the fibonacci function to calculate the output.
         document.querySelector('#which-fibonacci-number').textContent = whichFibonacciNumber.toString();
         document.querySelector('#fibonacci-number').textContent = fibonacci(whichFibonacciNumber).toString();
      });
   }());

   (function () {
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR reverseString FUNCTION HERE

      (function () {
         const reversalInputElement = document.querySelector('#reversal-input');
         // When the user changes the string and focuses on another part of the page, reverse the new string.
         // Notice the difference between the 'change' event and the 'input' event.
         reversalInputElement.addEventListener('change', function () {
            reversalInputElement.value = reverseString(reversalInputElement.value);
         });
      }());
   }());

   (function () {
      // This part is optional.  If you don't attempt it, you may delete this IIFE.
      // Write code here that will change the color of the square when the mouse interacts with it.
      // You may find the updateSquare function from the examples useful.
   }());

   (function () {
      // This part is optional.  If you don't attempt it, you may delete this IIFE.
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR rememberTotal FUNCTION HERE

      // Output the initial total.
      document.querySelector('#total-number').textContent = rememberTotal();
      // Update and output the total whenever the "Add it to the total" button is clicked.
      document.querySelector('#add-to-total').addEventListener('click', function () {
         rememberTotal(parseFloat(document.querySelector('#number-input').value));
         document.querySelector('#total-number').textContent = rememberTotal();
      });
   }());

});
