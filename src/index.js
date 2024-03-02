const express = require("express")
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const port = 3000

const Film = mongoose.model('Film', { 
    title: String,
    description: String,
    image_url: String,
    trailer_url: String
});

app.post('/', async (req, res) => {
    const film = new Film({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    })

    film.save()
    res.send(film)
})

app.get('/', (req, res) => {
    res.send('teste')
})

app.listen(port, () => {
    mongoose.connect('mongodb+srv://notsumez:U7V5IVaLPXRSSDDf@starwarsapi.yvn3zwn.mongodb.net/?retryWrites=true&w=majority&appName=starwarsAPI');
    console.log('App running')
})