let nokia = {
    merk: 'nokia',
    color: 'blue',
    camera: false,
    button: true,
    telp() {},
    sendSms() {},
    game() {}
}

// console.log(nokia)


































// Blueprint / Cetakan / Class 

class Hp {
    constructor(merk, color, button = false, camera = false) {
        this.merk = merk
        this.button = button
        this.color = color
        this.camera = camera
        this.battery = 100 
    }
}



let blackberry = new Hp('blackberry', 'purple', undefined, true)
console.log(blackberry);

// console.log(samsung, '>>>>>>>>>')
// samsung.game().telp();
// console.log(samsung)

let samsung = new Hp('samsung', 'black', null, true)
console.log(samsung)




















