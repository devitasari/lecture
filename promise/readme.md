OUTLINE:
- What is promise?
- Promise vs Callback
- Promise Chaining 
- Promise All
- Implementasi promise di fs

<br><br>

PROMISE => Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang 

<br>

KOMPONEN PROMISE 
1. States
    - `pending` : saat proses berlangsung
    - `fulfilled` : selesai dan terpenuhi
    - `rejected` : selesai dan gagal
2. Callback
    - `resolve` : function untuk handle state fulfilled
    - `reject` : function untuk handle state rejected
3. Aksi
    - `then` : aksi untuk merespon resolve
    - `catch` : aksi untuk merespon reject
    - `finally` : aksi yang akan selalu dieksekusi apapun responnya (optional)

<br>

PROMISE

```js

let telp = Math.random()

let janji = () => {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            if (telp > 0.5) {
                resolve('dia telp jam 8. ')
            } else {
                reject('dia tidak telp jam 8. ')
            }
        }, 1000)
    })
}

console.log('cerita dimulai ketika dia membuat janji...')

// bukti bahwa promise pending ketika tidak diberi aksi
console.log(janji());

janji()
.then(msg => {
    console.log(msg + 'Yeay aku senang')
})
.catch(msg => {
    console.log(msg + 'Hmm mungkin aku bukan prioritas');
})
.finally( _=> {
    console.log('cerita pun berakhir...');
})

```

<br>

CALLBACK

```js

function bukanJanji(cb) {
    setTimeout(_=> {
        let wa = Math.random()
        if (wa > 0.5) {
            cb(null, 'dia telp jam 8. ')
        } else {
            cb('dia tidak telp jam 8. ', null)
        }
        console.log('cerita pun berakhir...')
    }, 1000)
}

console.log('cerita dimulai ketika dia membuat pemanggilan ulang...')

bukanJanji((err, res) => {
    if (err) {
        console.log(err + 'Hmm mungkin aku bukan prioritas');
    } else {
        console.log(res + 'Yeay aku senang');
    }
})

```

Promise Vs Callback
- Lebih clean dan readable
- Apakah promise dapat menggantikan callback sepenuhnya? TIDAK. Beberapa tools masih menggunakan callback

<br>

CHAINING MULTIPLE PROMISE / COMPOSITION 
- output promise sebelumnya bisa menjadi input promise selanjutnya
- ketika terdapat promise gagal, maka promise sebelumnya tidak terpengaruh. Proses akan masuk `catch` dan promise selanjutnya tidak dieksekusi.

```js
let janjiTelp = (money, telp = true) => {
    return new Promise((resolve, reject) => {
        if (telp) {
            resolve({ msg: 'janji telp terpenuhi', money: money - 10e3 })
        } else {
            reject({ msg: 'telp cuma wacana', money })
        }
    })

}

let janjiMabar = (money, mabar = true) => {
    return new Promise((resolve, reject) => {
        if (mabar) {
            resolve({ msg: 'janji mabar terpenuhi', money: money - 20e3 })
        } else {
            reject({ msg: 'mabar cuma wacana', money })
        }
    })
}

let janjiJalan = (money, jalan = true) => {
    return new Promise((resolve, reject) => {
        if (jalan) {
            resolve({ msg: 'janji jalan terpenuhi', money: money - 50e3 })
        } else {
            reject({ msg: 'jalan cuma wacana', money })
        }
    })
} 

janjiTelp(100e3, true)
    .then(res => {
        console.log(res.msg + ' sisa uang ' + res.money);
        return janjiMabar(res.money, true)
    })
    .then(res => {
        console.log(res.msg + ' sisa uang ' + res.money);
        return janjiJalan(res.money, false)
    })
    .then(res => {
        console.log(res.msg + ' sisa uang ' + res.money);
    })
    .catch(err => {
        console.log(err.msg + ' sisa uang ' + err.money);
    })

```

PROMISE ALL => output tiap promise tidak menjadi input promise selanjutnya.
- output promise sebelumnya TIDAK menjadi input promise selanjutnya
- sekali promise gagal, maka akan masuk `catch` dan promise yang lain diabaikan, meskipun sebelumnya telah berhasil

```js

Promise.all([janjiTelp(100000, true), janjiMabar(100000, false), janjiTelp(100000, true)])
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})

```

<br>

Implementasi promise di fs

```js

const fs = require('fs/promises');

fs.readFile('./data.json', 'utf8')
.then(data => {
    console.log(JSON.parse(data));
})
.catch(err => {
    console.log(err);
})


fs.writeFile('./data.json', JSON.stringify(newData, null, 2))
.then(_ => {
    console.log('succes!');
})
.catch(err => {
    console.log(err);
})

```

source: https://nodejs.org/api/fs.html#fs_fspromises_readfile_path_options








