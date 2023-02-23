/*jslint browser */

// CS 3312, spring 2023
// Studio 6
// YOUR NAME: ___

// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   (function () {
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR createToDoList FUNCTION HERE

      (function () {

         // Create a new object that keeps track of a to-do list.
         const toDoList = createToDoList();

         document.querySelector('#add-to-do-list-item').addEventListener('click', function () {
            // Add a new to-do list item and output the new to-do list.
            toDoList.addItem(document.querySelector('#to-do-list-item-to-add').value);
            document.querySelector('#to-do-list-output').value = toDoList.toString();
         });

         document.querySelector('#remove-to-do-list-item').addEventListener('click', function () {
            // Remove a to-do list item and output the new to-do list.
            toDoList.removeItem(document.querySelector('#to-do-list-item-to-remove').value);
            document.querySelector('#to-do-list-output').value = toDoList.toString();
         });
      }());
   }());

   (function () {
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR findUniqueLetters FUNCTION HERE

      document.querySelector('#find-unique-letters').addEventListener('click', function () {
         // Filter the characters in the textbox, leaving only the first of each letter found.
         const wordElement = document.querySelector('#unique-letters-word');
         wordElement.value = findUniqueLetters(wordElement.value);
      });
   }());

   (function () {
      // Do not declare any other variables here, but you may declare variables inside your function.

      // WRITE YOUR createCodeBook FUNCTION HERE

      (function () {
         let codebook;

         // Create a new object that keeps track of a codebook.
         codebook = createCodeBook();

         document.querySelector('#save-codeword').addEventListener('click', function () {
            // Add a new codeword/meaning pair to the codebook.
            codebook.add(
               document.querySelector('#codeword-input').value,
               document.querySelector('#meaning-input').value
            );
         });

         document.querySelector('#get-meaning').addEventListener('click', function () {
            // Output a codeword's meaning.
            document.querySelector('#codebook-output').value = codebook.retrieve(
               document.querySelector('#codeword-input').value
            );
         });

         document.querySelector('#print-codebook').addEventListener('click', function () {
            // Output all codeword/meaning pairs already in the codebook.
            document.querySelector('#codebook-output').value = codebook;
            // The codebook's toString method is automatically called.
         });

         document.querySelector('#clear-codebook').addEventListener('click', function () {
            // Create a new, empty codebook object.
            codebook = createCodeBook();
            // Empty the output textbox.
            document.querySelector('#codebook-output').value = '';
         });
      }());
   }());

});
