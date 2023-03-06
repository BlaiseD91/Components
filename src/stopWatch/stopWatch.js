const time = document.querySelector('#time');
const startBttn = document.querySelector('#start');
const pauseBttn = document.querySelector('#pause');
const resetBttn = document.querySelector('#reset');

var hour = 0;
var min = 0;
var sec = 0;
var count = false;


reset();
function counting(){
        while(count){
            setTimeout(()=>{
                if(sec < 60){
                    sec++;
                }
                else{
                    sec = 0;
                    if(min<60){
                        min++;
                    }
                    else{
                        min = 0;
                        hour++;
                    }
                }
                display();
            }, 1000);
        }
}

function display(){
    time.textContent = String(hour).padStart(2, '0') + ' : ' + String(min).padStart(2, '0') + ' : ' + String(sec).padStart(2, '0');
}

function reset(){
    hour = 0;
    min = 0;
    sec = 0;
    display();
}

resetBttn.addEventListener('click', ()=>{
    count = false;
    reset();
    console.log('Reset');
});

startBttn.addEventListener('click', ()=>{
    if(!count){
        console.log('Start');
        count = true;
        counting();
    }
    else{
        console.log('Re-Start from 0')
        count = false;
        reset();
        count = true;
    }
});

pauseBttn.addEventListener('click', ()=>{
    if(count){
        count = false;
        console.log('Pause');
    }
    else{
        count = true;
        console.log('Re-Start')
    }
});

