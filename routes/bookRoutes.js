const { Book } = require('../models')
const axios = require('axios')

module.exports = app => {
    //Book Routes 
    app.get('/books', (req ,res) => {
        axios.get()
        Book.find({})
        .then(books => res.json(books))
        .catch(err => console.log(err))
    })
    app.post('/books', (req ,res)=> {
        Book.create(req.body)
        .then(res.sendStatus(200))
        .catch( err => console.log(err))
    })
}