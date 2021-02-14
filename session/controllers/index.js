const { Item, User } = require('../models')
const { compare } = require('../helper/bcrypt')

class Controller {

    static findAll(req, res) {
        Item.findAll()
            .then(items => {
                res.render('home', {items})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static formAdd(req, res) {
        res.render('add')
    }

    static create(req, res) {
        Item.create(req.body)
            .then(_ => {
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static delete(req, res) {
        Item.destroy(
            {
                where: {
                    id: req.params.id
                }
            })
            .then(_=> {
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static formRegister(req, res) {
        res.render('register')
    }

    static register(req, res) {
        User.create(req.body)
            .then(_=> {
                res.redirect('/login')
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }

    static formLogin(req, res) {
        res.render('login')
    }

    static login(req, res) {
        User.findOne({
            where: {
                username: req.body.username
            }
        })
            .then(user => {
                let hasilPassword = compare(req.body.password, user.password)
                if (user && hasilPassword) {
                    req.session.userId = user.id 
                    res.redirect('/')
                } else {
                    res.send('invalid username/password')
                }
            })
            .catch(err => {
                res.send(err)
            })
    }

    static logout(req, res) {
        console.log(req.session);
        req.session.destroy(function(err) {
           res.redirect('/login')
        })
    }

    static deleteUser(req, res) {
        User.destroy({
            where: {
                username: req.params.username
            }
        })
        .then(_=> {
            res.send('success delete')
        })
        .catch(err => {
            res.send(err)
        })
    }

}

module.exports = Controller