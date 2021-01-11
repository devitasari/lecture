// Aplikasi => membaca file ukuran besar 

const fs = require('fs')

// function callback(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(`panjang data: ${JSON.parse(data).length}`);
//     }
// }

fs.readFile('./0-data.json', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`panjang data: ${JSON.parse(data).length}`);
    }
})
