const { User } = require('../models')
const errorHandler = require('../helpers/errorHandler')

class Controller {

    static findAll(req, res) {
        User.findAll()
        .then(users => {
            res.render('home', { users })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addForm(req, res) {
        res.render('register')
    }

    static add(req, res) {
        console.log(req.body, '>>>>>');
        User.create(req.body)
        .then(_=> {
            res.redirect('/')
        })
        .catch(err => {
            //olah error dulu
            err = errorHandler(err)
            res.send(err)
        })
    }
}

module.exports = Controller