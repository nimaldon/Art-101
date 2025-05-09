// index.js - Lab 8 anon functions and call back 
// Author: Nicole Maldonado
// Date: May 8, 2025


// array
var numbers = [1,2,3,4];

//function muliplies 
function multiplyMe(x){
    var results = x * 10
    return results;
}

var mapResults100 = numbers.map(function(x) {
    return x * 100;
});


//test functions
console.log(multiplyMe(5));
console.log(multiplyMe(10));

//map
numbers.map(function(x){
    var results = x * 100
    return results;
})

//map results 
var mapResults = numbers.map(multiplyMe);
console.log("Results: ", mapResults)

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html("Original array: " + numbers + "<br>Multiplied by 10 array: " + mapResults + "<br>Multiplied by 100 array: " + mapResults100);

