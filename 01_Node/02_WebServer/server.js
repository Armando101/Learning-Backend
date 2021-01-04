const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  let salida = {
    nombre: 'Armando',
    age: 23,
    url: req.url
  };
  res.send(salida);
})

app.get('/data', (req, res)=> {
  res.send('Hello data');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})