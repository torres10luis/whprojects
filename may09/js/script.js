// var firstname = 'Matt';

// function whatsName(){
//     var lastname = 'higley';
//     console.log(firstname);
//     whatsLastName(lastname);
    
// }

// whatsName();

// // console.log(lastname);
// // let
// //const
// const name = 'matt';
// let colot = 'grey';

// for(let i=0; i<5; i++){
//     console.log('running' + i + ' times');
// }

// function whatsLastName(str){
//     console.log(str);
//     // console.log(i);

// }
// color = 'red';

// console.log(name, color);
// console.log(color);
// // name = 'david';
// // console.log(name);
// // for(var i=0; i< 10; i++){
// //     console.log('running again' + i + ' times');
// // }
// let firstName = 'matt';
// let lastName = 'Higley';
// let nameCombined = `${firstName} david ${lastName}`;
// console.log(nameCombined);


// let btn = document.querySelector('button');
// btn.addEventListener('click', function(evt){
//     console.log(this);
//     var colorizer = () => this.style.color = 'red';
//     colorizer();
// });

// var logCase = function(str){
//     console.log(str);
//     console.log(this);
// }

// logCase('matt');

var colors = ['red','orange','green','blue'];
 
for(let i=0; i< colors.length; i++){
    console.log(colors[i]);
}

// javascript forEach loop
colors.forEach(function(x,y){
    console.log(x, y);
});

//for of loop
var nums = [10,20, 30,40];
for(let num of nums){
    num += 1;
    console.log(num);
}

let myName = 'matt higley';
for(let letter of myName){
    console.log(letter);
}