// console.log(this);

// var info = {
//     userName: 'JavaScript',
//     userId: 123456,
//     getUserDetails: function () {
//         console.log('line 7', this);
//         function sayHello() {
//             console.log('Hello');
//             console.log('line 10', this);
//         }
//         sayHello();
//     }
// }

// info.getUserDetails();

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

