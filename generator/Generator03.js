// Generator 与状态机
let clock = function* () {
    while (true) {
        console.log('Tick!');
        yield;
        console.log('Tock!');
        yield;
    }
};

let _clock = clock();

_clock.next();
_clock.next();
_clock.next();
_clock.next();

