var  workAudio = document.getElementById("work-audio");
var  brakeAudio = document.getElementById("brake-audio");

var  pomoTitle = document.getElementById("pomo-title");
var  pomoDesc1 = document.getElementById("pomo-desc1");
var  pomoDesc2 = document.getElementById("pomo-desc2");
var  clock = document.getElementById("clock");

var  pomoMin = document.getElementById("minute");
var  pomoSec = document.getElementById("second");

function CurrentTime() {
    let date = new Date();
    let hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();
    clock.innerHTML = hour + ":" + minute;

    if (hour == 12) {
        longBrake();
    }

    if (hour != 12 && minute < 50) {
        workTime();
    }

    if (hour != 12 && minute >= 50) {
        brakeTime();
    }

    if (minute == 1 && second == 1) {
        playWorkAudio();
    }

    if (minute == 50 && second == 1) {
        playBrakeAudio();
    }
}

function workTime() {
    pomoTitle.innerHTML = "زمان سکوت و کـار";
    pomoDesc1.innerHTML = "";
    pomoDesc2.innerHTML = "";
    document.body.style.backgroundColor = "DodgerBlue";

    setTime()
}

function brakeTime() {
    pomoTitle.innerHTML = "زمان کـار یا استراحت با حفظ سکوت";
    pomoDesc1.innerHTML = "همکاران می توانند در این ساعت کماکان به کارهای خود بپردازند";
    pomoDesc2.innerHTML = "بهتر است بعد از 50 دقیقه کار به خود استراحت دهید";
    document.body.style.backgroundColor = "DeepPink";

    setTime(true)
}

function longBrake() {
    pomoTitle.innerHTML = "زمان نماز و کـار و نهار";
    pomoDesc1.innerHTML = "خوردن نهار در غیر این ساعت ممنوع است";
    pomoDesc2.innerHTML = "همکاران می توانند در این ساعت کماکان به کارهای خود بپردازند";
    document.body.style.backgroundColor = "MediumSeaGreen";

    setTime(true)
}

function setTime(brakeTime = false){

    let date = new Date(),
        minute = date.getMinutes(),
        second = date.getSeconds();

    minute = (brakeTime ? 59 : 50) - minute;
    second = 59 - second;

    if (minute < 10) {
        pomoMin.innerText = "0" + minute;
    }else {
        pomoMin.innerText = minute;
    }

    if (second < 10) {
        pomoSec.innerText = "0" + second
    } else{
        pomoSec.innerText = second
    }
}

function playBrakeAudio() {
    brakeAudio.play();
}

function playWorkAudio() {
    workAudio.play();
}

setInterval(CurrentTime, 1);