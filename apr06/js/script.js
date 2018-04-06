//**
//  * math object
//  *//
 // Integers- whole numbers
 //floats - decimals

//  var wha = .1 * .2;
//  // .0.03

//  var rounded = Math.round(0.00000000000001);
// // .49 && below rounds down
// // .5 && up rounds up

// var roundedDown = Math.floor(0.9999999999999)

// var roundedUp = Math.ceil(0.00000000000001);

// var pi = Math.PI;

// console.log( Math.pow(8,2));


// console.log( Math.sqrt(64));

// console.log( Math.random());

// console.log('.round():' +rounded, '.ceil():' +roundedUp, '.floor():' +roundedDown, '.PI:' +pi);

/**
 * Random Number Generator
 */

//  var rand = Math.random();
// rand = Math.floor(rand * 11);
//  console.log( rand );

//  function pickANum(){
//      var userNum = prompt('Guess a number between 0 and 10');

//      checkNum(userNum);
//  }
//  pickANum();

// function pickAnotherNum(){
//     var userNum = prompt('guess again');
//     checkNum(userNum);
// }


//  function checkNum(num){
//     if(num < rand){
//         alert(num + 'is too low. Pick Again');
//     }
//     else if(num > rand){
//         alert(num + 'is too high. Pick again');
//     }
//     else{
//         alert(num + 'is the right number!! You Win!');
//     }

//  }

//  pickAnotherNum();




var userPick = document.getElementById('userPick');
var submitBtn = document.querySelector('button');
var userPickRes = document.querySelector('h1');
var resetBtn = document.getElementById('reset') ;

submitBtn.addEventListener('click', getuserPick);
resetBtn.addEventListener('click', getRandomNum);

var rand;
var attempts = 3;


function getRandomNum(){
    attempts = 3;
    userPickRes.innerHTML = '';
    rand = Math.random();
    rand = Math.floor(rand * 11);
    userPick.value = '';
    console.log(rand);
    
    getRandColor(); 
} 

getRandomNum();
function getuserPick(){
    attempts = attempts - 1;
    var userNum =  parseInt(userPick.value) ;
    userPick.value = '';
    checkUserPick(userNum);
    // newColor();
    
}

function checkUserPick(x){
    if(attempts > 0){
        if(x < rand){
            printUserRes(x + 'is too low. Pick Again');
        }
        else if(x> rand){
            printUserRes(x + 'is too high. Pick again');
        }
        else if(x == rand){
            printUserRes(x + 'is the right number!! You Win!');
        }
        else {
            printUserRes('Game over');
        }
    }
    else{
        printUserRes('Game over');
    }
    console.log(x);

    
}

function printUserRes(userRes){
    userPickRes.innerHTML = userRes;

}
 
var randColor;

function getRandColor(){
    randColor = Math.random();
    randColor = Math.floor(randColor * 360);
    // cosole.log(randColor);
    document.body.style.backgroundColor = 'hsl(' + randColor + ',50%, 50%)';
}

getRandColor();


console.log(window.innerWidth, window.innerHeight);
window.addEventListener('mousemove', function(e){

    var width = Math.round( (e.x / window.innerWidth) * 100);
    var height = Math.round( (e.y / window.innerHeight) * 100);

    document.body.style.backgroundColor = `hsl(${randColor}, ${width}%, ${height}%)`; 
});

// function newColor(){
//     var changeColor = document.body.style.backgroundColor = 'red';
// }

// function getRandom(){
//     rand = Math.random();
//     rand = Math.floor(rand * 11);
//     userPick.value = '';
    
//     console.log(rand);

// }

// getRandom();





