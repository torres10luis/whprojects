// var p1 = document.getElementById('p1');
// console.log(p1);

// var p1q = document.querySelector('#p2');
// console.log(p1q);

// var pClass = document.querySelector('.p');
// console.log(pClass);

// var pLast = document.querySelector('.p:last-of-type');
// console.log(pLast);
// // pLast.style.fontSize = '28px';

// var pClasses = document.querySelectorAll('.p');
// console.log(pClasses);
// pClasses[2].style.fontSize = '5px';
// pClasses[1].style.color = 'red';
// pClasses[3].style.fontWeight = 'boldest';

// var pClassName = document.getElementsByClassName('p');
// console.log(pClassName);

// pClassName[0].style.fontSize = '30px';

// var pByTagName = document.getElementsByTagName('p');
// console.log(pByTagName);
// // pByTagName[9].style.color = 'blue';
// console.log(pByTagName.length);

// for loop
// 
// for(var i =0;i <10; i++){
//     pByTagName[i].style.color = 'red';
//     console.log(1);
// }
// for(var i =0;i <10; i++){
//     pByTagName[i].style.color = 'red';
//     console.log(1);
// }

// var name = 'luis';
// console.log(name.length);

// for(var i=0; i <name.length; i++){
//     console.log(name[i]);
//     console.log(i);
// }

// console.log(userName);
 

// for(var i=0; i<userName.length; i++){
//     console.log(i);
// }

// function prompt('userName');


// This function gets the users name and stores it.
// function askName(){
//     var name = prompt("what is your name?");
//     // console.log(name);

//     // We call the second function showName
//     showName(name);
// }

// function showName(name){
//     // console.log('showName is being hit');

//     // This for loop, will go through each individual letter in name with .length
//     for (var i = 0; i < name.length; i++){

//         // This alert will display each letter
//         console.log(name[i]);
//         alert('Your name is ' + name[i]);
//         // console.log(i);
//     }
// }

// askName();

// function getUserNums(){ 
//     var num1= prompt('Please enter a number');
//     var num2= prompt('Please enter another number');

//     addUserNums(num1, num2);
// }

// function addUserNums(x, y){
//     // alert(parseInt(x) + parseInt(y));
//     console.log(arguments);
// }

// getUserNums();

// function askColor(){
//     var color1 = prompt('type color')
//     var color2 = prompt('type color')
//     var color3 = prompt('type color')
//     console.log(color1, color2, color3);

//     changeColor(color1, color2, color3);
// }

// function changeColor(x1, x2, x3){
//     var car = document.getElementsByClassName('car');
//     for(var i =0;i <car.length; i++){
//             console.log(car);
//             console.log(car[i]);
//             car[i].style.color = arguments[i] ;
//             console.log(1);
//         }
// //    var p1 = document.getElementById('p1');
// //    p1.style.color = 'color1'
//     }

// askColor();

var paragraphs = document.querySelectorAll('p');

function getUserColors() {
    var userColors = prompt('Pick some colors (comma seperated)');
    var userTrimmedColors = [];
    for(var i =0; i <userColors.length; i++){
        userTrimmedColors.push(userColors[i].trim())
    };
    assignUserColors(userTrimmedColors);
    // console.log(userColors.split(",").trim());
    // var color1 = prompt('please pick a color');
    // var color2 = prompt('please pick a color');
    // var color3 = prompt('please pick a color');

    // assignUserColors(color1,color2, color3);
}

function assignUserColors(x, y, z){
    // console.log(x, y, z);
    for(var i =0; i< arguments.length; i++){
    paragraphs[i].style.color = arguments[i];
    }
}

getUserColors();