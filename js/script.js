const start=document.querySelector('.btn1');
const stop=document.querySelector('.btn2');
const reset=document.querySelector('.btn3');
let hrs=min=sec=ms=0,startTimer;

start.addEventListener('click',()=>{
    start.classList.add('btn1-active');
    stop.classList.remove('btn2-active');
    startTimer=setInterval(()=>{
       ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hrs++;
            min=0;
        }
        updateDisplay();
    },10);
});

stop.addEventListener('click',()=>{
    clearInterval(startTimer);
    start.classList.remove('btn1-active');
    stop.classList.add('btn2-active');
});
reset.addEventListener('click',()=>{
    hrs=min=sec=ms=0;
    clearInterval(startTimer);
    updateDisplay();
    start.classList.remove('btn1-active');
    stop.classList.remove('btn2-active');
   
});
function updateDisplay(){
phrs=hrs<10?'0'+hrs:hrs;
pmin=min<10?'0'+min:min;
psec=sec<10?'0'+sec:sec;
pms=ms<10?'0'+ms:ms;

    document.querySelector('.hrs').innerText=phrs;
    document.querySelector('.min').innerText=pmin;
    document.querySelector('.sec').innerText=psec;
    document.querySelector('.ms').innerText=pms;
}