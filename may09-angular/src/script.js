const value = 5;
document.getElementById('test').innerHTML = 'this is my house' + value;

const warn = document.querySelector('#warning');
if(value<10){
  warn.innerHTML = "warning: too low!!!!!1"
 }

 colors =['red', 'orange', 'yellow', 'green'];

 let result = '';

 colors.forEach(eachColor => {
    // result += ' ' + eachColor;
 });


document.getElementById('colors').innerHTML = result;
