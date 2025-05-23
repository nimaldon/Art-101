// index.js - Lab 12
// Requirments: jQuery to be loaded to read script
// Author: Nicole Maldonado
// Date: May 22, 2025

$(document).ready(function(){
// given a number return hogwart houses 

function sortedHat(str) {
const length = str.length;
const mod = length % 4;


if (mod === 0) {
  return "Ravenclaw";
} else if (mod === 1) {
  return "Hufflepuff"; 
} else if (mod === 2) {
  return "Slytherinn"
} else {
  return "Gryffindor";
}}

//click listner
console.log ("clicked");
$("button").click(function(){
  // get value of input text box and assign it to a variable
  let str = $("#input").val()
  console.log(str);
  // get the length of the name
  let nameLength = str.length;
  console.log (str);
  // get the house
  let house = sortedHat (str);
  console.log (house);
  //add house to output div
  $("#output").html("<h1>" + house + "</h1>")
})
});
