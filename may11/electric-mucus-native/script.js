let answer = document.querySelector('button');

// answer.style.backgroundColor = 'red'
answer.addEventListener('click', function(evt){
    console.log(evt);
    clicked();
});

function clicked(){
// answer.style.backgroundColor = 'red'
    
    // let qoute = alert('wrong answer');
    
   
}
let inputAnswer = document.getElementById('inputid');
inputAnswer.addEventListener('click', test)
    // inputAnswer.style.backgroundColor = 'red';

    console.log(inputAnswer);
    
    test(inputAnswer);


function test(){
    if(inputAnswer == 'blue'|| inputAnswer == 'Blue'){
        clicked();
    }
}
test();
function correct(inputAnswer){
    
}

   


// function userAnswer(test){
//     let qoute = alert('wrong answer');
