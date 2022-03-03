const input_val = document.querySelector('#inputid');
const color_val = document.querySelector('#color-id');

input_val.addEventListener('input',(event)=>{
    color_val.style.backgroundColor = input_val.value;
});