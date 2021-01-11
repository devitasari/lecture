// source: https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options

const fs = require('fs')

let data = fs.readFileSync('./data.csv', {encoding: 'utf8'})

data = data.split('\n')
let newData = []
for (let i=1; i<data.length; i++) {
    let items = data[i].split(',')
    newData.push({
        name: items[0],
        country: items[1],
        telp: items[2]
    })
}
console.log(newData);
