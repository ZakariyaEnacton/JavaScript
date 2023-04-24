const firstName = () => {
    return `Muhammad Zakariya`;
}

// const lastName = () => {
//     setTimeout(() => {
//         return `Bombaywala`;
//     }, 3000)
// }

const lastName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve`Bombaywala`;
        }, 2000)
    })
}

const region = () => {
    return `India`;
}

const callInfo = async () => {
    let fname = firstName()
    console.log(fname);

    let lname = await lastName()
    console.log(lname);

    let rgn = region()
    console.log(rgn);

}

callInfo()