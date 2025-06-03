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

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://yourapiendpoint.com/",
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
            id: 123,
            api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})

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

