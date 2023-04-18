// // Global context
// console.log(this); // Output: Window (in a browser) or Global (in Node.js)

// function greeting() {
//     // Function context
//     console.log(this); // Output: Window (in a browser) or Global (in Node.js) if called without context

//     this.message = "Hello";
//     console.log(this.message); // Output: "Hello"
// }

// greeting(); // Output: "Hello" as a result of logging "this.message" within the function

// const person = {
//     name: "John",
//     sayHi() {
//         // Function context within an object
//         console.log(this); // Output: the "person" object

//         console.log(`Hi, my name is ${this.name}`); // Output: "Hi, my name is John"
//     }
// };

// person.sayHi(); // Output: "Hi, my name is John" as a result of logging `this.name` within the method


sayHello();

function sayHello() {
    console.log('Hello');
}

var tipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}
tipper("150"); // this function varibale is call always define after the function 
