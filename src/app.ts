import { runTimer, stopTimer } from './stopWatch';

document.addEventListener('DOMContentLoaded', function(){
    const startButton = document.getElementById("start") as HTMLDivElement;
    const stopButton = document.getElementById("stop") as HTMLDivElement;

    startButton.addEventListener('submit', function(e) {
        e.preventDefault();
        onStartButtonClick();
    })

    stopButton.addEventListener('submit', function(e) {
        e.preventDefault();
        onStopButtonClick();
    })
})

function onStartButtonClick(): void {
    runTimer();
}

function onStopButtonClick(): void {
    stopTimer();
}

export { onStartButtonClick, onStopButtonClick };