// Source STO: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals

function satu() {
    setTimeout(() => {
        console.log(`satu`);
    }, 500)
}

function dua() {
    console.log(`dua`);
}

satu()
dua()


