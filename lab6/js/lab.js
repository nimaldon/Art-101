// index.js - Lab 5 js, nicoles transportation 
// Author: Nicole Maldonado
// Date: April 27, 2025

// Define Variables
myTransport = ["car", "bus"];


//create an object for my main ride
var myMainRide = {
  make: "Ford",
  model: "Fiesta",
  color: "White",
  year: 2015,
  age: function() {
  return 2025 - this.year;
  }
}

//output
document.writeln("My Transport:", myTransport, "</br>");
//this trick allows us to write an object to the document
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide,null,'/t'),"</pre>");
