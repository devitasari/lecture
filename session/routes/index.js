const express = require('express')
const router = express.Router()
const Controller = require('../controllers')
const mid = require('../helper/mid')



router.get('/register', Controller.formRegister)
router.post('/register', Controller.register)

router.get('/login', Controller.formLogin)
router.post('/login', Controller.login)

router.get('/destroy/:username', Controller.deleteUser)

router.get('/', Controller.findAll)

router.use(mid)
router.get('/add', Controller.formAdd)
router.post('/add', Controller.create)
router.get('/delete/:id', Controller.delete)

router.get('/logout', Controller.logout)



module.exports = router


