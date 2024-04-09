import { StopWatch } from './stopWatch';

document.addEventListener('DOMContentLoaded', function(){
    const startButton = document.getElementById("start") as HTMLDivElement;
    const stopButton = document.getElementById("stop") as HTMLDivElement;
    const time = document.getElementById("time") as HTMLHeadingElement;

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
    const watch = new StopWatch;
    watch.start();
}

function onStopButtonClick(): void {
    const watch = new StopWatch;
    watch.stop();
}

// function counterIncrements(): void {
//     const watch = new StopWatch
//     const number = watch.getTime();
//     time.
// }

export { onStartButtonClick, onStopButtonClick };