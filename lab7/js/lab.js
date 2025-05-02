// index.js - Lab 6  
// Author: Nicole Maldonado
// Date: April 30, 2025


// sortUserName - a function that user inputs and sorts letters of their name
function sortUserName() {

    var userName = window.prompt("Hi. Give me your name so I can sort it up.");
    console.log("userName=", userName );
    //split string into array 
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort=", nameArraySort);
    //join array back to a string
    var nameSorted = nameArray.join('');
    console.log ("nameSorted =", nameSorted);
    return nameSorted;
    //put array back together
}

// output
document.writeln("Here is your sorted name: ",
    sortUserName(), "</br>");