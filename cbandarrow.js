// function isEven(element) {
//     // if (element % 2 === 0) {
//     //     return true;
//     // }
//     // return false;
//     return element % 2 === 0;
// }

// console.log(isEven(5));


var isEven = (element) => {
    return element % 2 === 0
}

// var result = [4, 10, 22, 36].every(isEven);
// console.log(result);

var result = [4, 10, 22, 36].every((e) => e % 2 === 0);
console.log(result);