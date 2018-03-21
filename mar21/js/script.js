function welcome(){
    var username = prompt("What is your name?");
    document.getElementById('welcome').innerHTML = username;
    
}
// welcome();

function firework(){
    document.getElementById('h1').style.backgroundImage = "url('/img/firework.webp')";
    document.getElementById('h1').style.color = "white";
    toggleColor();
}

function toggleColor(){
    document.body.classList.toggle('colorize');
}

function looney(){
    document.getElementById('p').style.backgroundImage = "url('/img/looney.webp')";
    document.getElementById
}