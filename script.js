let display=document.querySelector("#display");
let reset=document.querySelector("#resetBtn");
let count=0;
let interval;



let startBtn=()=>{
     interval=setInterval(()=>{
         display.innerText=count++;
     },1000)
    display.innerText=count++;
}

let resetBtn=()=>
{
    count=0;
    display.innerText=0;
    clearInterval(interval);
}

let stopBtn=()=>
{
     clearInterval(interval);
}






document
.querySelector("#startBtn").
addEventListener('click',startBtn);

document
.querySelector("#resetBtn")
.addEventListener('click',resetBtn);

document
.querySelector("#stopBtn")
.addEventListener('click',stopBtn);



