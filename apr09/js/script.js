
// function welcomeMsg(str){
//     // console.log(str);
//     return "welcome " + str;
// }


// // consoleInfo('luis');
// console.log( welcomeMsg('luis'));

// function calcNums(x, y){
//     // console.log(x + y);
//     return x + y;

// }

// console.log(calcNums(3,2));

// var h3 = document.querySelector('h3');
// var user = document.querySelector('user');

// function concatStrings(str1, str2){
//     return str1 + " " + str2;
// }


// function getFirstname(){
//     return prompt('What is your first name?');

// }

// function getLastname(){
//     return prompt('What is your last name?');

// }

// function welcomeUser(){
//     h3.innerHTML = concatStrings(getFirstname(), getLastname());

// }

// user.textContent = concatStrings( getFirstname(), getLastname() )
// // user.innerHTML = concatStrings( getFirstname(), getLastname() );

// // welcomeUser();


var spans = document. querySelectorAll('span');
var occupations = ['janitor', 'teacher', 'developer', 'plumber', 'cashier'];
var plurals = ['fish', 'monkey', 'shoes', 'cactii']
var adjective = ['early', 'late', 'fast', 'rapid', 'few']
var numbers = ['10', '5', '100', '40']
var nationalities = ['mexico', 'USA', 'france', 'europe', 'china', 'argentina']
var places = ['hawaii', 'new york', 'downtown']
var celebrities = ['ben aflack', 'roy', 'tom cruise']
var liquids = ['water', 'soda', 'beer', 'juice']
var famous = ['spiderman', 'hulk', 'thor', 'superman']
var verbs = ['fall', 'drag', 'blew', 'attack']

for( var i = 0; i< spans.length; i++){
var s = spans[i];
    
    switch(spans[i].className){
        case 'occupation':
            spans[i].textContent = occupations[getRandNum(occupations.length)];
            break; 
        case 'plural':
            spans[i].textContent = ( plurals[getRandNum(plurals.length)]);
            break;
        case 'adjective':
            spans[i].textContent = adjective[getRandNum(adjective.length)];
            break;
        case 'number':
            spans[i].textContent = numbers[getRandNum(numbers.length)];
            break;
        case 'nationality':
            spans[i].textContent = nationalities[getRandNum(nationalities.length)];
            break;
        case 'place':
            spans[i].textContent = places[getRandNum(places.length)];
            break;
        case 'celebrity':
            spans[i].textContent = celebrities[getRandNum(celebrities.length)];
            break;
        case 'famous':
            spans[i].textContent = famous[getRandNum(famous.length)];
            break;
        case 'liquid':
            setText(s, liquids);
            break;
        case 'number':
            spans[i].textContent = [getRandNum(numbers.length)];
            break;
        case 'verb':
            setText(s, verbs);
        default:
            spans[i].style.color = 'red';
        
    }
}

function getRandNum(num){
    
  return Math.floor(Math.random() * num);
  
}

function setText(currSpan, testArray){
     currSpan.textContent = testArray[getRandNum(testArray.length)];
}