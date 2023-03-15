const startPauseButton = document.querySelector('#startPauseButton');
const resetButton = document.querySelector('#resetButton');
const timeBar = document.querySelector('#time');

var counting = false;
var [sec, min, hour] = [0,0,0];
var timer = null;

loadButtons();
loadTime();

resetButton.addEventListener('click', () => {
    watchStop();
    [sec, min, hour] = [0,0,0];
    loadTime();
    loadButtons();

});

startPauseButton.addEventListener('click', () => {
    if(!counting) watchStart();
    else watchStop();
    loadButtons();
});

function stopwatch(){
    sec++;
    if(sec == 60){
        sec = 0;
        min++
        if(min == 60){
            min = 0;
            hour++;
        }
    }
    loadTime();
}

function watchStop(){
    counting = false;
    timeBar.style.opacity = 0.5;
    clearInterval(timer);
}

function watchStart(){
    if(timer != null){
        clearInterval(timer);
    }
    counting = true;
    timeBar.style.opacity = 1;
    timer = setInterval(stopwatch,1000);
}

function loadTime(){
    let strHour;
    let strMin;
    let strSec;
    if(sec < 10) strSec = String(sec).padStart(2, 0);
    else strSec = sec.toString();
    if(min < 10) strMin = String(min).padStart(2, 0);
    else strMin = min.toString();
    if(hour < 10) strHour = String(hour).padStart(2, 0);
    else strHour = hour.toString();
    timeBar.textContent = strHour + " : " + strMin + " : " + strSec; 
}

function loadButtons(){
    resetButton.textContent = "RESET";
        //nincs számlálás
    if(!counting) startPauseButton.textContent = "START";
        //számlálás tart
    else startPauseButton.textContent = "PAUSE";
}