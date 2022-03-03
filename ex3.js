const input_text = document.querySelector('#inp-id');
const output_text = document.querySelector('#out-id');
const encodebtn = document.querySelector('#enc-btn');
const decodebtn = document.querySelector('#dec-btn');


encodebtn.addEventListener('click',()=>{
    if(input_text.length==0){
        alert("please enter the value");
    }
    else{
        let uri = input_text.value;
        let encoded = encodeURIComponent(uri);
        output_text.value = encoded;
    }
})


decodebtn.addEventListener('click',()=>{
    if(input_text.length==0){
        alert("please enter the value");
    }
    else{
        let uri = input_text.value;
        let decoded = decodeURIComponent(uri);
        output_text.value = decoded;
    }
})