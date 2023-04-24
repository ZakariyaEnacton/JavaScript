var myCount = new Map();

myCount.set(1, `One`);
myCount.set(2, `Two`);
myCount.set(3, `Three`);
myCount.set(4, `Four`);
myCount.set(5, `Five`);

console.log(myCount);

// for (let key of myCount.keys()) {
//     console.log(`Key is ${key}`);
// }

// for (let value of myCount.values()) {
//     console.log(`Key is ${value}`);
// }

for (let [key, value] of myCount) {
    console.log(`the key is ${key} and value is ${value}`);
}


// in forEach() always work with the values not for indxes so forEach is given a value not a key
myCount.forEach((key) => console.log(`${key}`));


// note : also here v => value and k => key first always will be value
myCount.forEach((v, k) => console.log(` key ${k} and value ${v}`));


