import { StopWatch } from './stopWatch';

const stopWatch = new StopWatch();

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById("start") as HTMLButtonElement;
    const stopButton = document.getElementById("stop") as HTMLButtonElement;
    const time = document.getElementById("time") as HTMLHeadingElement;

    startButton.addEventListener('click', onStartButtonClick);
    stopButton.addEventListener('click', onStopButtonClick);
});

function onStartButtonClick(): void {
    stopWatch.start();
}

function onStopButtonClick(): void {
    stopWatch.stop();
}

