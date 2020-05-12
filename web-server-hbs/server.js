const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers/helpres')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'harold'
    })
})

app.get('/about', (req, res) => {


    res.render('about', {

    })
})

app.listen(3000, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});