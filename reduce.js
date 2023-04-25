let users = [
    { firstName: `Barak`, lastName: `Obama`, age: 50 },
    { firstName: `Donald`, lastName: `Trump`, age: 65 },
    { firstName: `Josh`, lastName: `Buttler`, age: 30 },
    { firstName: `Steven`, lastName: `Smith`, age: 38 },
    { firstName: `MS`, lastName: `Dhoni`, age: 65 },
]


let output = users.reduce(
    (fname, a) => {
        if (a.age == 65) {
            console.log(a.firstName);
        }
        return fname;
    })