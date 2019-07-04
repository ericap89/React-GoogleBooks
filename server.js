const express = require('express')
const app = express()

//Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Routes 
require('./routes')(app)

//mongoose connection 
require('mongoose').connect('mongodb://localhost/googlebooks_db', { useNewUrlParser : true , useCreateIndex: true, useFindAndModify: true})
    .then(_ =>app.listen(3001))
    .catch(err => console.log(err))

