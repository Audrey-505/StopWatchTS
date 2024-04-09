import { StopWatch } from './stopWatch'

test('start method starts the stopwatch', () => {
    const watch = new StopWatch;
    watch.start();
    expect(watch['isRunning']).toBe(true);
});

test('stop method stops the stopwatch', () => {
    const watch = new StopWatch;
    watch.start();
    watch.stop();
    expect(watch['isRunning']).toBe(false);
});

test("Does stop watch start timer", () => {
    const watch = new StopWatch;
    watch.start();
    jest.useFakeTimers();
    jest.advanceTimersByTime(5000);
    expect(watch.getTime()).toBeGreaterThanOrEqual(5000);
})