
let display=document.querySelector("#display");
let getval=document.querySelector("#resetValue");
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

let getTime=()=>
{
    let para=document.createElement('p');
    para.innerText=`The value we got is ${count}`;
    getval.append(para);

}

let clearTime=()=>
{
    getval.innerHTML=" ";
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

document
.querySelector("#getTimeBtn")
.addEventListener('click',getTime);

document
.querySelector("#clearTimeBtn")
.addEventListener('click',clearTime);

