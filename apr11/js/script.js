// var btns = document.querySelectorAll('button');

// // this - context based. look to the left of the dot


// for (var i = 0; i < btns.length; i++){
//     btns[i].addEventListener('click', function(evt)
//     {
//         console.log(evt.target);
//         console.log(this);
//     });
// }


// window.addEventListener('click', function(evt){
//     console.log(evt.target.nodeName);
//     if(evt.target.nodeName == 'BUTTON'){
//         console.log(evt.target);
//     }
// });



// var cars = ['jeep', 'honda', 'jeep', 'subaru'];
// var types = ['string', true, 5, [1,2,3]];
// // console.log(types[3][1]);
// // console.log(cars);

// //objects

// var car = {
//     type: 'jeep',
//     model: 'wrangler',
//     color: 'black',
//     offroad: 'true',
//     trim: ['sunroof', 'hard', '4 wheel drive']
// };
// // console.log(car.trim);

// //create new object of yourself

// var matt = {
//     firstname: 'Matt',
//     lastname: 'Higley',
//     age: '22',
//     hair: 'true',
//     height: "6'4",
//     haircolor:'brown',
//     facialhair: 'true',
//     facialhaircolor: 'brown',
//     greeting: function(msg){
//         // console.log(this.firstname);
//         // console.log(msg + this.firstname);
//     }
// }

// var types = ['string', true, 5, [1,2,3], matt];

// matt.middlename = 'david';
// // console.log(matt);
// matt.middlename = 'charles';
// // console.log(matt);

// matt.greeting("hey there buddy");

// matt.firstname = 'bruce';

// matt.greeting('hello new me');


// // object constructor function 
// function Person(first, last, age, eye){
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.eye = eye;
//     this.greeting = function(msg){
//         console.log(msg + this.firstname);
//     }
// }

// var myDad = new Person('david', 'higley', 59, 'brown');
// var myMom = new Person('laura', 'torres', 34, 'blue');
// var mySis = new Person('sonia', 'saldana', 33, 'green');
// console.log(myDad.eye);

// // function Person(first, last, age, )

// mySis.greeting('hello');


/*
    username
    email
    password

*/
// var user =

var form = document.querySelector('form');
// console.log(form.elements.value);


var users = [];
// var user = 0;
// console.log(user);


function StartAcct(user, email, password){
    this.user = user;
    this.email = email;
    this.password = password;
    
    
}

var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    users.push(
        new StartAcct(
            form.elements[0].value,
            form.elements[1].value,
            form.elements[2].value
        )
    );
    console.log(users);
    

    // for(var i = 0; i < form.elements.length +1 ; i++){

    //     console.log(form.elements[i].value);
    // }

    // users[i] = new StartAcct(form.elements);

    
});
// console.log(users);
