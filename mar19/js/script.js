// document.getElementById('btn2').style.color = "red";

// console.log("Here is my first console message");
// console.info("This is info");
// console.warn("Danger will Robinson");
// console.error("Uh Uh Uh. You didn't ay the magic word");

// Broweser Alert box
// alert('Here is my popup');

// Broweser Confirm Box
// var userResult = confirm("Did you remember to lock your car?");
// console.log(userResult);

    // Browser Prompt Box
// var userResult = prompt("what is your name?");
// console.log(userResult);

/*
variables
    Must start with lowercase!
    Must start with a letter.
    can contain underscore.
    may use camelcasing.
*/
var username;
var room1;
var user_name;
var userName;
var theUsersFirstNameOnly;

//math 
var age = 22;
var decade = 10;
var double = 2;
var div = 4; 
var newAge = (age + decade) * double / div;
// pemdas matters!
console.log(newAge);

// Concatination
// var firstName = prompt("What is your first name?");
// var lastName= prompt("What is your last name?");
// alert(firstName +" "+ lastName);

/* interpolation
    ${variable }
    alert(`${firstName} ${lastName}`);
*/

/*Prompt user for:
the make of the vehicle, 
color, 
year 
confirm the results 

3 new variables 
formatting: color, year, make.
*/
 
function getUserVehicle(){
    var make = prompt("What is the make of your vehicle?");
    var year = prompt("What is the year of your car?");
    var color = prompt("What is the color of your vehicle?");

    alert(`${color}, ${year}, ${make}`);
}

function primaryUser(){
    var first = prompt("What is your first name?");
    var last = prompt("What is your last name?");
    var place = prompt("Where were you born?");

    document.getElementById('primaryUser').innerHTML = first + " " + last + ", born in " + place;
}

function secondUser(){
    var age = prompt("How old are you?");
    var height = prompt("How tall are you?");
    var siblings = prompt("How many siblings do you have?");

    document.getElementById('secondUser').innerHTML = age + " " + height + "feet" + ", family size is" + " " + siblings;
}

function thirdUser(){
    var place = prompt("Where do you live?");
    var where = prompt("Where do you wish to travel?");
    var dream = prompt("What is your dream car?");

    document.getElementById('thirdUser').innerHTML = "I live in " + place + ", I wish to go to " + where + ", while driving a " + dream;
}