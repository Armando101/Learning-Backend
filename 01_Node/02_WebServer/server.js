const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 8080;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  // Pasando valores de variables en la vista
  res.render('home', {
    name: 'Armando',
    year: new Date().getFullYear()
  });
})

app.get('/about', (req, res) => {
  // Pasando valores de variables en la vista
  res.render('about', {
    name: 'Armando',
    year: new Date().getFullYear()
  });
})

app.get('/data', (req, res)=> {
  res.send('Hello data');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});