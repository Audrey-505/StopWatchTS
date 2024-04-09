"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopWatch = void 0;
var StopWatch = /** @class */ (function () {
    function StopWatch() {
        this.startTime = 0;
        this.isRunning = false;
    }
    StopWatch.prototype.start = function () {
        if (!this.isRunning) {
            this.startTime = Date.now();
            this.isRunning = true;
        }
    };
    StopWatch.prototype.stop = function () {
        if (this.isRunning) {
            this.isRunning = false;
        }
    };
    StopWatch.prototype.reset = function () {
        this.startTime = 0;
    };
    StopWatch.prototype.getTime = function () {
        if (this.isRunning) {
            return Date.now() - this.startTime;
        }
        else {
            return 0;
        }
    };
    return StopWatch;
}());
exports.StopWatch = StopWatch;
