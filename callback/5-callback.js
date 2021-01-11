function kereta(tujuan) {
    console.log(`sudah sampai di ${tujuan} dengan naik kereta`);
}

function pesawat(tujuan) {
    console.log(`sudah sampai di ${tujuan} dengan naik pesawat`);
}


// Callback sync

function pergi(tujuan, cb) {
    console.log(`aku akan pergi ke ${tujuan} ...`);
    cb(tujuan)
}


// pergi('solo', pesawat)

// Callback async disimulasikan dengan STO, krn kalian belum belajar fetch data ya..

function pergiAsync(tujuan, cb) {
    setTimeout(() => {
        console.log(`aku akan pergi ke ${tujuan} ...`);
        cb(tujuan)
    }, 1000)
}

pergiAsync('bandung', kereta)



// Oke??? kembali ke readAsync



