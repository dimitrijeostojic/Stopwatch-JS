let seconds = 0;
let tens = 0;
let minutes = 0;
let interval;

let seconds1 = document.getElementById("seconds");
let tens1 = document.getElementById("tens");
let minutes1 = document.getElementById("minutes");
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

buttonStart.onclick = () => {
    clearInterval(interval);
    interval = setInterval(runStopwatch, 10);
}

buttonStop.onclick = () => {
    clearInterval(interval);
}

buttonReset.onclick = () => {
    clearInterval(interval);
    seconds = 0;
    tens = 0;
    minutes = 0;
    tens1.innerHTML = `0${tens}`;
    seconds1.innerHTML = `0${seconds}`;
    minutes1.innerText = `0${minutes}`;
}


const runStopwatch = () => {
    tens++;
    seconds1.innerText = seconds;
    tens1.innerText = tens;

    if (Number(tens) <= 9) {
        tens1.innerHTML = `0${tens}`
    }

    if (Number(tens) > 9) {
        tens1.innerHTML = tens
    }

    if (Number(tens) > 99) {
        seconds++
        seconds1.innerHTML = `0${seconds}`
        tens = 0
        tens1.innerHTML = `0${tens}`
    }

    if (Number(seconds) > 9) {
        seconds1.innerHTML = seconds
    }
    if (Number(seconds) <= 9) {
        seconds1.innerHTML = `0${seconds}`;
    }

    if (Number(seconds) >= 60 && Number(minutes) <= 9) {
        seconds = 0;
        seconds1.innerText = `0${seconds}`;
        minutes++;
        minutes1.innerText = `0${minutes}`;
    }

    if (Number(seconds) > 60 && Number(minutes) > 9) {
        seconds = 0;
        seconds1.innerText = `0${seconds}`;
        minutes++;
        minutes1.innerText = `${minutes}`;
    }
}
