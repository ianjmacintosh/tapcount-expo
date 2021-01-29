export function getTimeObject(millisecondsElapsed) {
    let remainderTime = millisecondsElapsed;

    let hours = Math.floor(remainderTime / (60 * (60 * 1000)));
    remainderTime -= hours * 60 * 60 * 1000;

    let minutes = Math.floor(remainderTime / (60 * 1000));
    remainderTime -= minutes * 60 * 1000;

    let seconds = Math.floor(remainderTime / 1000);
    remainderTime -= seconds * 1000;

    let milliseconds = Math.round(remainderTime / 100);

    return {
        hours,
        minutes,
        seconds,
        milliseconds
    }
}