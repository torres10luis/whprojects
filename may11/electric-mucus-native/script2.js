let input = document.querySelector('input'),
    submit = document.querySelector('button');
submit.disabled = true;
input.addEventListener('keyup',()=> {
    let userInput = this.value.toLowerCase();
    if(this.value === 'electric mucus'){
        submit.style.backgroundColor = 'hsl(139.4, 34.4%, 63.9%)';
        submit.disabled = false;
    }
    else{
        submit.style.backgroundColor = this.value;
        submit.disabled = true;
    }
});
submit.addEventListener('click',() =>{
    this.disabled = true;
    input.disabled = true;
    alert('yay you won');
});