  export class StopWatch {
    private startTime: number;
    private isRunning: boolean;

    constructor() {
        this.startTime = 0;
        this.isRunning = false;
    }

     start(): void {
        if(!this.isRunning){
            this.startTime = Date.now();
            this.isRunning = true;
        }
    }

     stop(): void {
        if(this.isRunning) {
            this.isRunning = false;
        }
    }

    reset(): void {
        this.startTime = 0;
    }

    getTime(): number {
        if(this.isRunning){
            return Date.now() - this.startTime;
        } else {
            return 0;
        }
    }
}