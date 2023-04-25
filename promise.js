let userClicked = true;

const checkNetwork = new Promise((resolve, reject) => {
    resolve(`User is offline`)
})

const isRequestMade = new Promise((resolve, reject) => {
    if (userClicked == true) {
        resolve(`Request made!`)
    }
    reject(`Request not made yet, don't bring dino game up...`)
})

Promise.all([
    checkNetwork, isRequestMade
]).then((messege) => {
    console.log(messege + ` bring dino game up...`);
}).catch((messege) => {
    console.log(messege + ` User seem to be online`);
})