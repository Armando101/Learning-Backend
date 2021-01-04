const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 8080;

require('./hbs/helpers/helpers');

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (_req, res) => {
  // Pasando valores de variables en la vista
  res.render('home', {
    name: 'armando rivera',
    year: new Date().getFullYear()
  });
})

app.get('/about', (_req, res) => {
  // Pasando valores de variables en la vista
  res.render('about');
})

app.get('/data', (_req, res)=> {
  res.send('Hello data');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});