function sumTwo(a, b) {
    return a + b;
}

var mySum = [5, 1]
console.log(`this is naormal function call : ` + sumTwo(5, 6)); // normal call

console.log(`this is call using array var : ` + sumTwo(mySum)); // using with array


// note: spread Op use to convert any object into seperate variables
console.log(`this is using with spread operator : ` + sumTwo(...mySum)); // spread Operator


// note: rest Op rest Op convert individual values into array

function sumThree(a, b, ...args) { // rest Op
    console.log(args);
    let sum = a + b;
    let mul = 1;
    for (const arg of args) {
        mul *= arg;
    }
    return [mul, sum];
}

console.log(sumThree(5, 5, 5, 5, 5));