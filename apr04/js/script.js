// function userName(){
//     var fullName = prompt('What is your full name?').split(" ");
//     // var splitFullName = fullName.split(' ');


//     lastName(fullName);
    // console.log(splitFullName);
// }

// function lastName(fullName){
//     document.getElementById('firstname').innerHTML = fullName[0];
//     document.getElementById('lastname').innerHTML = fullName[1];
    // var name = document.getElementById('name');
    // for(var i=0; i<name.length; i++){;
    //     console.log(fullName);
    //     console.log(name[i]);
    //     // alert('Your Name is + name[i]');
    //     // console.log(i);
    // }
    // var name = document.getElementById('name');
// }




// userName();




// function getUserName(){
//     var userName = prompt('What is your full name?').split(" ");
     
//     outputUserName(userName);

// }

// function outputUserName(nameArray){
//     // document.getElementById('firstname').innerHTML = fullName[0];
//     // document.getElementById('lastname').innerHTML = fullName[nameArray.length -1];
//     for(var i = 0; i< nameArray.length; i++){
//         if(i == 0 || i == nameArray.length - 1){
//             // console.log("we got the zeroth element!", nameArray[1]);
//             document.getElementById('firsname').innerHTML += nameArray[i] + " ";
//         }
//     }
// }

// getUserName();

// arrays

// var cars = ["focus", "wrx", "mustang"];
// // push method
// console.log(cars[1]);  
// console.log(cars.length);

// cars.push("bmw");
// console.log(cars);
// // pop method
// cars.pop();
// console.log(cars);

// var removedCar = cars.pop();
// console.log(cars);
// console.log(removedCar);
// // unshift method puts them in first 
// cars.unshift("chevy" , "honda");
// console.log(cars);
// // shift method
// cars.shift();
// console.log(cars);

// //splice  method
// cars.splice(1,1, "red", "green" );
// console.log(cars);

// cars.splice(1, 1,  "orange", "apple", "kiwi", "carrot");
// console.log(cars);

// cars.splice(2, 1);
// console.log(cars);

// //slice method non destructive 
// cars.slice(4);
// var removed = cars.slice(2,6);
// console.log(cars);
// console.log(removed);


// var movies = ["ff1", "2012", "nemo", "superman", "batman"];
// console.log(movies);

// movies.unshift("die hard");
// console.log(movies);

// movies.splice(3,4, "GodFather I", "GodFather II", "GodFather III");
// console.log(movies);

// movies.push("Guardians of the Galaxy");
// console.log(movies);

// var newArray = movies.slice(1, 4);
// console.log(newArray);

// // newArray.pop();
// // console.log(newArray)

// console.log(movies[5]);

// movies.splice(0, 7, "jurassic park");
// console.log(movies);

// && is the and

// function getUserAge(){
//     var userage = parseInt(prompt('How old are you?'));
//         if(userage < 21){
//             console.log('not old enough');
//         }
//         else if(userage == 21){
//             console.log('good to go');
//         }
//         else{
//             console.log('plenty old');
//         }
// }

// getUserAge();

// //ternary operator


// function getAge(){
//     var age = prompt('What is my age again');
//     (age == "21") ? console.log('true') : console.log('false');
// }

// getAge();


// new assigment
// prompts alerts confirms

// simple version:
// if else else if

//complex version:
// loops
//arrays

// write a function and prompt the user telling a 

// function initial(){
//     var first = parseInt(prompt('Welcome to continue you must be 21 or older, how old are you? '));

//     if( first < 21){
//         console.log('not old enough bruhh');
//     }
//     else if( first => 21){
//         console.log('come one through')
//     }
//     else{
//         alert('you are entering a kids site.' );
//     }

//     console.log(first);
//     quest(first);
// } 
// function quest(){
//     var first = parseInt(prompt('Are you sure? '));
    
// }

// initial();

var startStory = document.getElementById('opt1');
startStory.addEventListener("click", story);

var nameUser = document.getElementById('userinput');
var starts = document.getElementById('start');

function start(){
    var greeting = prompt('Welcome to the beginning of your journey, What is your  full name?');
console.log(greeting);
    
    nameUser.innerHTML = greeting;
    starts.innerHTML = greeting;
    
}

start();
function story(){
    var person = prompt('First need to make a quick decision, what car will you choose gtr, mcclaren, ferrari?');

    
    if(person == 'gtr' || person == 'Gtr'){
        
        colorChoice(person);
    }
    else if( person == 'ferrari' || person == 'Ferarri'){
        colorChoice(person);
    } 
    else if(person == 'mcclaren' || person == 'McClaren' || person == 'Mcclaren'){ 
        colorChoice(person);
    }
    else{
        alert('error please try again ');
    }
 

    console.log(person);
}

function colorChoice(person){
    var color = prompt('Now time to prep up your' + " " + person + " " + 'what color will you choose. red, white, black');

    if(color == 'black' || color == 'Black'){
        // alert('Great choice! You are rolling in a classy elegant' + color );
        final(color, person);
    }
    else if( color == 'red' || color == 'Red'){
        // alert('Great choice! You are rolling in a fierce' + color ); 
        final(color,person);
    } 
    else if(color == 'white' || color == 'White'){ 
        // alert('Great choice! You are rolling in a classic' + color);
        final(color, person);
    }
    else{
        alert('error please try again ');
        colorChoice();
    }
    
}

function final(colorChoice, person){
    var last = prompt('well you made it! now where will you escape to? canada, new york, california?')

    if(last == 'canada'){
        alert('Incredible you just stole a' + " " + colorChoice + " " + person + " " + "you reckless driver, enjoy your ride through the nice mountain yet cold weather of beautiful canada" );
    }
    else if(last == 'new york'){
        alert('Incredible you just stole a' + " " + colorChoice + " " + person + " " + " Look at you now speeding away from the cops through the busy streets of new york city. so long my friend" );
    }
    else if(last == 'california'){
        alert('Incredible you just stole a' + " " + colorChoice + " " + person + " " + "Beautiful paradise in the long sunny days of south california next to the miles and miles of breath taking beaches" );
    }
    else{
        alert('choose city wisely.')
    }
    
    ending.innerHTML = last;
}

// in progress for an additional sequence

// var smalls = document.querySelectorAll('small');
// var word1 = ['fast', 'fell'];
// var word2 = ['deep', 'trap'];

// for(var i=0; i< smalls.length; i++){
//     var s = smalls[i];

//     switch(smalls[i].className){
//         case 'word1':
//         smalls[i].textContent = word1[getRandNum(word1.length)];
//         break;
//         case 'word2':
//         smalls[i].textContent = word2[getRandNum(word1.length)];
//         break;
//     }
// }

// function getRandNum(num){
//     return Math.floor(Math.random() * num);
// }

// function setText();