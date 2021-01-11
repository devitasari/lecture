let hp1 = {
    merk: 'nokia',
    color: 'blue',
    button: true,
    camera: false,
    telp() {},
    sendSms() {},
    game() {}
}

// let hp2 = {
//     merk: 'sony',
//     color: 'black',
//     button: true,
//     camera: true,
//     telp() {},
//     sendSms() {},
//     game() {}
// }

// Blueprint / Cetakan / Class 

class Hp {
    constructor(merk, color, button = true, camera = false) {
        this.merk = merk,
        this.button = button,
        this.color = color,
        this.camera = camera
    }
    telp(no = 'unknown') {
        console.log(`${this.merk} call ${no}`);
        return this
    }
    sendSms() {
        console.log(`${this.merk} send sms`);
        return this
    }
    game() {
        console.log(`open the game`);
    }
    changeMerk(newMerk) {
        this.merk = newMerk
        console.log(this)
    }
}


module.exports = Hp











