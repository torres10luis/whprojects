var menu = document.getElementById('menu');
var userName = document.getElementById('userName');
var userStyle = document.getElementById('userStyle');

var nav = document.getElementById('nav');
var main = document.getElementById('main');
var user = document.getElementById('user');
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');

menu.addEventListener('click', vertmenu);
userName.addEventListener('click', getUserame);
userStyle.addEventListener('click', styleUsername);
a1.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e);
    this.style.color = "green";
}); //anynomus function
a2.addEventListener('click', colorText2);

function changeBody(){
    document.body.style.backgroundColor = 'teal';
}
changeBody()
function vertmenu(){
    nav.classList.toggle('vertical');
    main.classList.toggle('vertical');
}
function getUserame(){
    var userName = prompt('What is your name?');
    user.innerHTML = userName;
}
function styleUsername(){
    user.classList.add('mega');
}
function colorText1(){
    a1.style.color = "red";
}
function colorText2(e){
    e.preventDefault();
    console.log(e);
    a2.style.color = "blue";
}