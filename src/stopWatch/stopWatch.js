const time = document.querySelector('#time');
const startBttn = document.querySelector('#start');
const pauseBttn = document.querySelector('#pause');
const resetBttn = document.querySelector('#reset');

var hour = 0;
var min = 0;
var sec = 0;
var count = false;


reset();

function startCount(){
    count = true;
}

function stopCount(){
    count = false;
}

function reset(){
    hour = 0;
    min = 0;
    sec = 0;
    time.textContent = String(hour).padStart(2, '0') + ' : ' + String(min).padStart(2, '0') + ' : ' + String(sec).padStart(2, '0');
}

resetBttn.addEventListener('click', ()=>{
    reset();
    console.log('Reset');
});

startBttn.addEventListener('click', ()=>{
    if(!count){
        console.log('Start');
        startCount();
    }
    else{
        console.log('Re-Start from 0')
        startCount();
    }
});

pauseBttn.addEventListener('click', ()=>{
    if(count){
        stopCount();
        console.log('Pause');
    }
    else{
        startCount();
        console.log('Re-Start')
    }
});

