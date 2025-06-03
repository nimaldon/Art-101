// index.js - Lab 15 ajax
// Requirments: jQuery to be loaded to read script
// Author: Nicole Maldonado
// Date: May 26, 2025


$(document).ready(function(){
const ajaxObj = {
  url: "https://yesno.wtf/api",
  type: "GET",
  dataType: "json"
}

$("#sumbuton").click(function(){
  console.log("click");
  $.ajax(ajaxObj)
  .done(function(data){
    console.log("sucess");
    console.log(data);
    
    let answer = data.answer;
    
    let imageURL = data.image;
    
    let imageHTML = "<img src='" + imageURL + "'>";
    
    $("#output").html("<h1>" + answer);
    $("#output").append(imageHTML);
  })
  .fail(function( xhr, status, errorThrown )
       {
    conosole.log(errorThrown + "Status:" + status);
  });
})

});

