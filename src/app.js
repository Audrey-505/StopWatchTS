"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onStopButtonClick = exports.onStartButtonClick = void 0;
var stopWatch_1 = require("./stopWatch");
document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
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
    (0, stopWatch_1.runTimer)();
}
exports.onStartButtonClick = onStartButtonClick;
function onStopButtonClick() {
    (0, stopWatch_1.stopTimer)();
}
exports.onStopButtonClick = onStopButtonClick;
