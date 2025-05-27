// index.js - Lab 13 Loops
// Requirments: jQuery to be loaded to read script
// Author: Nicole Maldonado
// Date: May 26, 2025


$(document).ready(function(){
// Return fizz or buzz depending on number
function fizzBuzz() {
    // Create a variable called output and set it to an empty string.
    let output = "";
    // Create a variable called oneLongString and set it to an empty string.
let oneLongString = "";

    // Loop through numbers 1 to 100
   for (let i=0; i<200; i++) {
        let str = "";
      
        // For each number if multiple of 3
        if (i % 3 === 0) str += "fizz";
      
        // If a multiple 5
        if (i % 5 === 0) str += "buzz" 
  
       // If a multiple 7
        if (i %7 === 0) str += "boom"

       if(str !== "") {

         oneLongString = oneLongString + `${i} ${str}!<br>`;
       }

       else {
           oneLongString = oneLongString + `${i}<br>`
       }

     }

         return oneLongString;
}

// Click listener on button click run fizzbuzz function
$("button").click(function(){
    $("#output").html(fizzBuzz());
});

});

