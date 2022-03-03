const addition = document.querySelector('#incrementbtn');
const subtraction = document.querySelector('#decrementbtn');
const input_val = document.querySelector('#counterbtn');
let counter=0;

addition.addEventListener('click',(event)=>{
    counter++;
    input_val.value = counter;
})


subtraction.addEventListener('click',(event)=>{
    counter--;
    input_val.value = counter;
})
