const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = 3000
const session = require('express-session')


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(routes)

app.listen(PORT, _=> {
    console.log(`server indoapril running at port ${PORT} 🏪`);
})