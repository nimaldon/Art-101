// index.js - Lab 9 java script and jQuery 
// requirments: jQuery must be loaded for script to work
// Author: Nicole Maldonado
// Date: May 12, 2025



// Add a button to each special-sections
$(".minor-section").append("<button class='button-special'>Make Special</button>");
// Add a click listener for each Make Special button
$(".minor-section .button-special").click(function() {
    // add or remove the special class from its parent section.
    $(this).parent().toggleClass("special");
});
