module.exports = ( Schema , model ) => model('Book', new Schema ({
    title: String, 
    author: String,
    description: String,
    link: String, 
    image: String, 
}))

