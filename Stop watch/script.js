let [secs,mins,hrs] = [0,0,0];
let timerDisplay =  document.querySelector(".timerDisplay");

let timer = null;


document.getElementById("timerStart").addEventListener("click", () => {
    if(timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(timerTheDisplay,1000);
});

document.getElementById("timerPause").addEventListener("click", () => {
    clearInterval(timer); 
});

document.getElementById("timerReset").addEventListener("click", () => {
    clearInterval(timer);
    [secs, mins, hrs] = [0,0,0];
    timerDisplay.innerHTML = "00 : 00 : 00";
});

function timerTheDisplay() {
    secs++;
    if(secs == 60) {
        secs = 0;
        mins++;
        if(mins == 60) {
            mins = 0;
            hrs++;
        }
    }
    let h = hrs < 10 ? "0" + hrs : hrs;
    let m = mins < 10 ? "0" + mins : mins;
    let s = secs < 10 ? "0" + secs : secs;

    timerDisplay.innerHTML =  `${h} : ${m} : ${s}`;
}


