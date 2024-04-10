import { StopWatch } from './stopWatch';

document.addEventListener('DOMContentLoaded', function(){
    const startButton = document.getElementById("start") as HTMLButtonElement;
    const stopButton = document.getElementById("stop") as HTMLButtonElement;
    const resetButton = document.getElementById("reset") as HTMLButtonElement;
    const time = document.getElementById("time") as HTMLParagraphElement;

    let intervalId: NodeJS.Timeout | null = null

    startButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Start button clicked');
        onStartButtonClick();
    })

    stopButton.addEventListener('click', function(e) {
        e.preventDefault();
        onStopButtonClick();
    })

    resetButton.addEventListener('click', function(e) {
        e.preventDefault();
        onResetButtonClick();
    })

    function onStartButtonClick(): void {
        const watch = new StopWatch;
        watch.start();
        intervalId = setInterval(updateTimer, 1000);
    }
    
    function onStopButtonClick(): void {
        const watch = new StopWatch;
        watch.stop();
        if(intervalId){
            clearInterval(intervalId);
        }
    }
    
    function onResetButtonClick(): void {
        const watch = new StopWatch;
        watch.reset();
        time.innerText = '00:00:00';
    }

    function updateTimer(): void {
        const watch = new StopWatch();
        const elapsedTime = watch.getTime();
        const hours = Math.floor(elapsedTime / 3600000); // 3600000 milliseconds in an hour
        const minutes = Math.floor((elapsedTime % 3600000) / 60000); // 60000 milliseconds in a minute
        const seconds = Math.floor((elapsedTime % 60000) / 1000); // 1000 milliseconds in a second

        // Format time display as HH:MM:SS
        const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
        time.innerText = formattedTime;
    }

    function padZero(num: number): string {
        return num < 10 ? `0${num}` : `${num}`;
    }
    
})
