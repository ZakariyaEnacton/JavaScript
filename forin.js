// const name = ['Google', 'YouTube', 'Facebook', 'Instagram', 'Twitter', 'WhatsApp'];

// for (const n of name) {
//     console.log(n);
// }

var name = {
    gg: 'Google',
    yt: 'YouTube',
    fb: 'Facebook',
    ig: 'Instagram',
    tt: 'Twitter',
    wa: 'WhatsApp'
}

for (n in name) {
    console.log(`key is : ${n} and the value is : ${name[n]}`);
}