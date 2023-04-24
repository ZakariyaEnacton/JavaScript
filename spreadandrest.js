function sumTwo(a, b) {
    return a + b;
}

var mySum = [5, 1]
console.log(`this is naormal function call : ` + sumTwo(5, 6)); // normal call

console.log(`this is call using array var : ` + sumTwo(mySum)); // using with array


// note: spread Op use to convert any object into seperate variables
console.log(`this is using with spread operator : ` + sumTwo(...mySum)); // spread Operator

