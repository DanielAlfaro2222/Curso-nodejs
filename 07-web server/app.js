'use strict';

// Servidor con las librerias de node
/* const http = require('http');

http.createServer((request, response) => {
    response.write('Hola mundo');
    response.end();
}).listen(8000); */

// Servidor usando express
const express = require('express');
const app = express();

// Servir contenido estatico
app.use(express.static('public'));

// Usar a handlebars como motor de plantillas
app.set('view engine', 'hbs');

// Registrar partials
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/snippets');

app.get('/', (request, response) => {
    response.render('index.hbs', {
        titulo: 'Curso node js',
        nombre: 'Daniel'
    })
});

app.get('/generic', (request, response) => {
    response.render('generic.hbs', {
        titulo: 'Curso node js',
        nombre: 'Daniel'
    })
});

app.get('/elements', (request, response) => {
    response.render('elements.hbs', {
        titulo: 'Curso node js',
        nombre: 'Daniel'
    })
});

app.listen(8000);