"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Khalel Abaquin
   Date:   3.14.19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/

//This line of code loads the function 'init' every time the browser refreshes.
window.onload = init;

//This line of code declares 'stars' as a global variable to every 'span' element with the id of 'stars'
var stars = document.querySelectorAll("span#stars img");

//This section of code creates the function 'init', declares the value of the 'stars' variable, nests a for loop within itself that changes the style of the cursor, & adds an event listener that 'lights the stars' every time the cursor goes over it.
function init() {
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }
      document.getElementById("comment").addEventListener("keyup", updateCount);
}

//This block of code creates the function 'lightStars' with the parameter of 'e'. This function will fill in the empty star when the user hovers over it. It declares the local variables 'starNumber' & starSelected & nests two for loops that change the image of the star.
function lightStars(e) {
      var starNumber = e.target.alt;
      var starSelected = e;
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      //Inside the function outside of the for loops, the element with the id of 'rating' is grabbed & is set to the text string 'starNumber stars' where the value of the starNumber variable is 'starNumber'.
      document.getElementById("rating").value = starNumber + " " + "stars";
      //This piece of code initializes the 'turnOffStars' function every time the mouse leaves the targeted element. It also removes the event listener when the mouse leaves the element, but not before the user clicks on it.
      e.target.addEventListener("mouseleave", turnOffStars);
      e.target.addEventListener("click", function () {
            starSelected.target.removeEventListener("mouseleave", turnOffStars);
      });
}

//This section of code creates the function 'turnOffStars'. The function has a for loop nested within & grabs the element with the id of 'rating' & sets the value to an empty text string.
function turnOffStars() {
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating").value = "";
}

//This last block of code creates a function named 'updateCount', its purpose is to keep track of the amount characters that the user types.
function updateCount() {
      //Inside the function, two local variables, 'commentText' & 'charCount' are declared & the element with the id of 'wordCount' is set to the text string "charCount/1000" where 'charCount' is the value of the charCount variable.
      var commentText = document.getElementById("comment").value;
      var charCount = countCharacters(commentText);
      document.getElementById("wordCount").value = charCount + "/1000";
      //This section of code contains an if/else statement that changes the background & font color of the input element with the id of 'wordCount' depending if the amount of characters inside the textarea box is over 1000.
      if (charCount > 1000) {
            document.getElementById("wordCount").style.backgroundColor = "red";
            document.getElementById("wordCount").style.color = "white";
      } else {
            document.getElementById("wordCount").style.backgroundColor = "white";
            document.getElementById("wordCount").style.color = "black";
      }
}

// Add an event listener for the target of the event object that runs an anonymous function removing the turnOffStars() function from the mouseleave event.

/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}