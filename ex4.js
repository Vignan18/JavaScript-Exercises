const noOfCharacters = document.querySelector('#noOfChar');
const input_val = document.querySelector('#inputid');

input_val.addEventListener('input',(event)=>{
    console.log("eneterd");
    noOfCharacters.innerText = `The above text has ${event.target.value.length} characters`
});
