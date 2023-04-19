let count = 0

var time = setInterval(() => {
    if (count < 1000) {
        count++
        console.log(count);
    }
}, 1);

setTimeout(() => {
    console.log('Done...')
}, 1600);
