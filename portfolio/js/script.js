// document.getElementById('bob').style.backgroundColor ="red";

// function bob(){
//     document.getElementById('main').style.backgroundColor = "blue";
// }

var newProject = document.querySelector('#columns');

function clickMe(){
newProject.addEventListener('click', clickMe);
    
    console.log('test');
}

clickMe();