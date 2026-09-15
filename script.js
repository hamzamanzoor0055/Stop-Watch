let display=document.querySelector("#display");
let reset=document.querySelector("#resetBtn");
let count=0;



let startBtn=()=>{
    let interval=setInterval(()=>{
         display.innerText=count++;
     },1000)
    display.innerText=count++;
}

let stopBtn=()=>{
    count=0;
    display.innerText=0;
}






document
.querySelector("#startBtn").
addEventListener('click',startBtn);

document
.querySelector("#stopBtn")
.addEventListener('click',stopBtn)




