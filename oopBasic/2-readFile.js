// source: https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
const fs = require('fs')

let data = fs.readFileSync('../asset/data.csv', {encoding: 'utf-8'})

data = data.split('\n')
let newData = []

for (let i=1; i<data.length; i++) {
    let temp = data[i].split(',')
    newData.push({
        name: temp[0],
        country: temp[1],
        telp: temp[2]
    })
}


console.log(newData)


console.log('baju\nbaru')


cal.tambah(5).kurang(1) => 1+ 5 -1  = 5

