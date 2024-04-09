import { runTimer, stopTimer } from './stopWatch'

test('Does stop watch begin', () => {
        expect(runTimer()).toBe(true);
})

test('Does stop watch stop', () => {
    expect(stopTimer()).toBe(true);
})