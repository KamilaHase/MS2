
/*-------------------------TIMER AND GO TO GAME PAGE-----------------------------------*/
/* adapted from https://www.youtube.com/watch?v=_a4XCarxwr8&t=333s "How to Create a Countdown Timer with JavaScript" */

const timeCountdown = document.getElementById("timer-font-lg");
let timeSecond = 30;

displayTime(timeSecond);

const countdown = setInterval (() => {
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond <= 0 || timeSecond < 1){
        endTime();
        clearInterval(countdown);
        window.location.href = "game.html";
    }
    
},1000)

function displayTime(second) {
    const sec = Math.floor(second % 60);
    timeCountdown.innerHTML = `00:${sec<10?'0':''}${sec}`;
}

function endTime(){
    timeCountdown.innerHTML = `TIME OUT`;
}
