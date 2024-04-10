"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stopWatch_1 = require("./stopWatch");
document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
    var resetButton = document.getElementById("reset");
    var time = document.getElementById("time");
    var intervalId = null;
    startButton.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Start button clicked');
        onStartButtonClick();
    });
    stopButton.addEventListener('click', function (e) {
        e.preventDefault();
        onStopButtonClick();
    });
    resetButton.addEventListener('click', function (e) {
        e.preventDefault();
        onResetButtonClick();
    });
    function onStartButtonClick() {
        var watch = new stopWatch_1.StopWatch;
        watch.start();
        intervalId = setInterval(updateTimer, 1000);
    }
    function onStopButtonClick() {
        var watch = new stopWatch_1.StopWatch;
        watch.stop();
        if (intervalId) {
            clearInterval(intervalId);
        }
    }
    function onResetButtonClick() {
        var watch = new stopWatch_1.StopWatch;
        watch.reset();
        time.innerText = '00:00:00';
    }
    function updateTimer() {
        var watch = new stopWatch_1.StopWatch();
        var elapsedTime = watch.getTime();
        var hours = Math.floor(elapsedTime / 3600000); // 3600000 milliseconds in an hour
        var minutes = Math.floor((elapsedTime % 3600000) / 60000); // 60000 milliseconds in a minute
        var seconds = Math.floor((elapsedTime % 60000) / 1000); // 1000 milliseconds in a second
        // Format time display as HH:MM:SS
        var formattedTime = "".concat(padZero(hours), ":").concat(padZero(minutes), ":").concat(padZero(seconds));
        time.innerText = formattedTime;
    }
    function padZero(num) {
        return num < 10 ? "0".concat(num) : "".concat(num);
    }
});
