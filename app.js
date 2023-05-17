require('colors');
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;
//*Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//*Servir CONTENIDO ESTATICO mediante middleware de express con .use(). En este caso todo lo que esta dentro de la carpeta public
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Lucho DC',
    title: 'Curso Node Devtalles',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Lucho DC',
    title: 'Curso Node Devtalles',
  });
});
app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Lucho DC',
    title: 'Curso Node Devtalles',
  });
});

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});
app.listen(port, () => {
  console.log(`[SERVER ON PORT]: ${port}`.bgGreen);
});
