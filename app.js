const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use( express.static('public'));


app.get('/', (req, res) => {
    res.render('home',{
        name: "Angel López Jr.",
        title:"Node Course"
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        name: "Angel López Jr.",
        title:"Node Course"
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        name: "Angel López Jr.",
        title:"Node Course"
    });
});

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/views/index.hbs');
});

app.get('*', (req, res) => {
    res.send('404 | Page not found');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});