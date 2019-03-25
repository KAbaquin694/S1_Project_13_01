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

//This line of code declares 'stars' as a global variable with ni value.
var stars = document.querySelectorAll("span#stars img");

//This section of code creates the function 'init', declares the value of the 'stars' variable to every 'span' element with the id of 'stars', & nests a for loop within itself.
function init() {
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }
      document.getElementById("comment").addEventListener("keyup", updateCount);
}

function lightStars(e) {
      var starNumber = e.target.alt;
      var starSelected = e;
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }
      for (var i = 0; starNumber < 5; i++) {
            stars.src = "bw_star.png";
      }
      document.getElementById("rating") = starNumber + " " + "stars";
      e.target.addEventListener("mouseleave", turnOffStars);
      e.target.addEventListener("click", function () {
            starSelected.target.removeEventListener("mouseleave", turnOffStars);
      });
}

function turnOffStars() {
      for (var i = 0; stars.length < 5; i++) {
            stars.src = "bw_star.png";
      }
      document.getElementById("rating").innerHTML = "";
}

function updateCount() {
      var commentText = document.querySelectorAll("textarea comment");
      var charCount = countCharacters(commentText);
      wordCountBox = document.querySelectorAll("input wordCount");
      document.getElementById("wordCount").innerHTML = charCount + "/1000";
      if (charCount > 1000) {
            document.getElementById("wordCount").style.color = white;
            document.getElementById("wordCount").style.backgroundColor = red;
      } else {
            document.getElementById("wordCount").style.color = black;
            document.getElementById("wordCount").style.backgroundColor = white;
      }
}

// Add an event listener for the target of the event object that runs an anonymous function removing the turnOffStars() function from the mouseleave event.

/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}