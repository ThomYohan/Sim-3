require('dotenv').config()
const express = require('express')
const massive = require('massive')
// const session = require('express-session')
const controller = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port: ${SERVER_PORT}`)
    })
})

app.use(express.json())
// app.use(session({
//     resave: false,
//     saveUninitialized: false
// }))


app.post('/api/auth', controller.login)