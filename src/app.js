"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onStopButtonClick = exports.onStartButtonClick = void 0;
var stopWatch_1 = require("./stopWatch");
document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
    var time = document.getElementById("time");
    startButton.addEventListener('submit', function (e) {
        e.preventDefault();
        onStartButtonClick();
    });
    stopButton.addEventListener('submit', function (e) {
        e.preventDefault();
        onStopButtonClick();
    });
});
function onStartButtonClick() {
    var watch = new stopWatch_1.StopWatch;
    watch.start();
}
exports.onStartButtonClick = onStartButtonClick;
function onStopButtonClick() {
    var watch = new stopWatch_1.StopWatch;
    watch.stop();
}
exports.onStopButtonClick = onStopButtonClick;
