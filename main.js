var  workAudio = document.getElementById("work-audio");
var  brakeAudio = document.getElementById("brake-audio");

var  pomoTitle = document.getElementById("pomo-title");
var  pomoDesc1 = document.getElementById("pomo-desc1");
var  pomoDesc2 = document.getElementById("pomo-desc2");
var  clock = document.getElementById("clock");

var  pomoMin = document.getElementById("minute");
var  pomoSec = document.getElementById("second");

var second = 1000;
var minute = second * 60;
var hour = minute * 60;

let countDownKar = new Date('Sep 30, 2100 00:50:00').getTime();

function CurrentTime() {
    let date = new Date();
    let hour = date.getHours(), minute = date.getMinutes(), second = date.getSeconds();
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

    setPomoTime()
}

function brakeTime() {
    pomoTitle.innerHTML = "زمان کـار یا استراحت با حفظ سکوت";
    pomoDesc1.innerHTML = "همکاران می توانند در این ساعت کماکان به کارهای خود بپردازند";
    pomoDesc2.innerHTML = "بهتر است بعد از 50 دقیقه کار به خود استراحت دهید";

    setPomoTime()
}

function longBrake() {
    pomoTitle.innerHTML = "زمان نماز و کـار و نهار";
    pomoDesc1.innerHTML = "خوردن نهار در غیر این ساعت ممنوع است";
    pomoDesc2.innerHTML = "همکاران می توانند در این ساعت کماکان به کارهای خود بپردازند";

    setPomoTime()
}

function setPomoTime(){
    let nowDate = new Date().getTime(), distance = countDownKar - nowDate;
    var minTime = Math.floor((distance % (hour)) / (minute));
    var secTime = Math.floor((distance % (minute)) / second);
    document.body.style.backgroundColor = "DodgerBlue";

    if (minTime < 10) {
        pomoMin.innerText = "0" + minTime;
    }else {
        pomoMin.innerText = minTime;
    }

    if (secTime < 10) {
        pomoSec.innerText = "0" + secTime
    } else{
        pomoSec.innerText = secTime
    }
}

function playBrakeAudio() {
    brakeAudio.play();
}

function playWorkAudio() {
    workAudio.play();
}

setInterval(CurrentTime, 1);