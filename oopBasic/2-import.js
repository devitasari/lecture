let Hp = require('./1-oop.js')

// proses instantiate
let hp2 = new Hp('sony', 'black', true)
let hp400 = new Hp('xiaomi', 'gold', true)

console.log(hp2);

// chaining method
hp2.telp().sendSms().game()

